import type { H3Event } from 'h3'
import {
  createError,
  getQuery,
  getRequestHeader,
  getRequestURL,
  setHeader,
  setResponseStatus
} from 'h3'
import {
  HTTPFacilitatorClient,
  type HTTPAdapter,
  type HTTPRequestContext,
  type HTTPResponseInstructions,
  type RouteConfig,
  x402HTTPResourceServer,
  x402ResourceServer
} from '@x402/core/server'
import { ExactEvmScheme } from '@x402/evm/exact/server'
import { createPaywall } from '@x402/paywall'
import { evmPaywall } from '@x402/paywall/evm'

type ArticleDocument = {
  _path?: string
  title?: string
  description?: string
  date?: string
  exclusive?: boolean
  price?: string
}

type X402RuntimeConfig = {
  receivingWallet?: string
  facilitatorUrl?: string
  network?: string
  articlePrice?: string
}

const paywallProvider = createPaywall()
  .withNetwork(evmPaywall)
  .build()

class H3X402Adapter implements HTTPAdapter {
  constructor(private readonly event: H3Event) {}

  getHeader(name: string): string | undefined {
    return getRequestHeader(this.event, name)
  }

  getMethod(): string {
    return this.event.method
  }

  getPath(): string {
    return getRequestURL(this.event).pathname
  }

  getUrl(): string {
    return getRequestURL(this.event).toString()
  }

  getAcceptHeader(): string {
    return this.getHeader('accept') || ''
  }

  getUserAgent(): string {
    return this.getHeader('user-agent') || ''
  }

  getQueryParams(): Record<string, string | string[]> {
    return getQuery(this.event) as Record<string, string | string[]>
  }

  getQueryParam(name: string): string | string[] | undefined {
    return this.getQueryParams()[name]
  }
}

const writeX402Response = (event: H3Event, response: HTTPResponseInstructions): unknown => {
  setResponseStatus(event, response.status)

  Object.entries(response.headers).forEach(([key, value]) => {
    setHeader(event, key, value)
  })

  return response.body ?? {}
}

const getArticlePrice = (
  article: ArticleDocument,
  x402Config: X402RuntimeConfig
): string => article.price || x402Config.articlePrice || '$0.001'

export const serveExclusiveArticle = async (
  event: H3Event,
  article: ArticleDocument,
  x402Config: X402RuntimeConfig
): Promise<unknown> => {
  const payTo = x402Config.receivingWallet
  const network = x402Config.network || 'eip155:84532'
  const facilitatorUrl = x402Config.facilitatorUrl || 'https://x402.org/facilitator'

  if (!payTo) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Missing X402_RECEIVING_WALLET'
    })
  }

  const adapter = new H3X402Adapter(event)
  const requestContext: HTTPRequestContext = {
    adapter,
    path: adapter.getPath(),
    method: adapter.getMethod(),
    paymentHeader: adapter.getHeader('payment-signature') || adapter.getHeader('x-payment')
  }
  const articlePrice = getArticlePrice(article, x402Config)
  const routeConfig: RouteConfig = {
    accepts: {
      scheme: 'exact',
      price: articlePrice,
      network,
      payTo
    },
    description: article.description || article.title || 'Exclusive article',
    mimeType: 'application/json',
    unpaidResponseBody: () => ({
      contentType: 'application/json',
      body: {
        error: 'payment_required',
        article: {
          title: article.title,
          description: article.description,
          date: article.date,
          exclusive: true,
          price: articlePrice
        },
        x402: {
          price: articlePrice,
          network,
          facilitatorUrl
        }
      }
    })
  }

  const resourceServer = new x402ResourceServer(
    new HTTPFacilitatorClient({ url: facilitatorUrl })
  ).register(network, new ExactEvmScheme())
  const httpServer = new x402HTTPResourceServer(resourceServer, {
    [`GET ${requestContext.path}`]: routeConfig
  })
    .registerPaywallProvider(paywallProvider)

  await httpServer.initialize()

  const paymentResult = await httpServer.processHTTPRequest(requestContext, {
    appName: 'Doyoque',
    currentUrl: adapter.getUrl(),
    testnet: network === 'eip155:84532'
  })

  if (paymentResult.type === 'no-payment-required') {
    return { article }
  }

  if (paymentResult.type === 'payment-error') {
    return writeX402Response(event, paymentResult.response)
  }

  const responseBody = Buffer.from(JSON.stringify({ article }))
  const settlementResult = await httpServer.processSettlement(
    paymentResult.paymentPayload,
    paymentResult.paymentRequirements,
    paymentResult.declaredExtensions,
    {
      request: requestContext,
      responseBody,
      responseHeaders: {
        'content-type': 'application/json'
      }
    }
  )

  if (!settlementResult.success) {
    return writeX402Response(event, settlementResult.response)
  }

  Object.entries(settlementResult.headers).forEach(([key, value]) => {
    setHeader(event, key, value)
  })

  return { article }
}
