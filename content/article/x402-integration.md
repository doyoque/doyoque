---
title: x402 Integration
description: A practical TypeScript integration note for charging or paying per HTTP request with x402.
date: 2026-05-26
exclusive: true
price: $0.001
---

# x402 Integration

x402 is a payment protocol that uses HTTP `402 Payment Required` as the negotiation point between a paid resource server and a client. The first request hits a protected endpoint, the server returns payment instructions, the client signs a payment payload, and the request is retried with payment attached.

The useful part is that this flow can happen without account setup, API key provisioning, or a traditional checkout screen. It fits paid APIs, agent-accessible tools, premium content, and small usage-based requests.

## Seller flow

Use this when you own the API and want to charge callers.

Install the server packages:

```bash
npm install @x402/express @x402/core @x402/evm
```

Create a paid endpoint:

```ts
import express from 'express'
import { HTTPFacilitatorClient } from '@x402/core/server'
import { ExactEvmScheme } from '@x402/evm/exact/server'
import { paymentMiddleware, x402ResourceServer } from '@x402/express'

const app = express()

const payTo = process.env.X402_RECEIVING_WALLET

if (!payTo) {
  throw new Error('Missing X402_RECEIVING_WALLET')
}

const facilitatorClient = new HTTPFacilitatorClient({
  url: process.env.X402_FACILITATOR_URL ?? 'https://x402.org/facilitator'
})

app.use(
  paymentMiddleware(
    {
      'GET /api/report': {
        accepts: {
          scheme: 'exact',
          price: '$0.001',
          network: 'eip155:84532',
          payTo
        },
        description: 'Paid report endpoint',
        mimeType: 'application/json'
      }
    },
    new x402ResourceServer(facilitatorClient).register(
      'eip155:84532',
      new ExactEvmScheme()
    )
  )
)

app.get('/api/report', (_request, response) => {
  response.json({
    status: 'ok',
    report: 'This response was unlocked through x402.'
  })
})

app.listen(4021, () => {
  console.log('x402 API listening on http://localhost:4021')
})
```

For production, change the network and facilitator setup intentionally. The example above uses Base Sepolia (`eip155:84532`) and the public test facilitator so the flow can be tested without real mainnet funds.

## Buyer flow

Use this when your app or agent needs to call an x402-protected API.

Install the client packages:

```bash
npm install @x402/fetch @x402/core @x402/evm viem
```

Wrap `fetch` with payment handling:

```ts
import { x402Client, x402HTTPClient } from '@x402/core/client'
import { ExactEvmScheme } from '@x402/evm/exact/client'
import { wrapFetchWithPayment } from '@x402/fetch'
import { privateKeyToAccount } from 'viem/accounts'

const privateKey = process.env.X402_PRIVATE_KEY as `0x${string}`

if (!privateKey) {
  throw new Error('Missing X402_PRIVATE_KEY')
}

const signer = privateKeyToAccount(privateKey)
const client = new x402Client()

client.register('eip155:*', new ExactEvmScheme(signer))

const fetchWithPayment = wrapFetchWithPayment(fetch, client)

const response = await fetchWithPayment('http://localhost:4021/api/report')
const data = await response.json()

const httpClient = new x402HTTPClient(client)
const settlement = httpClient.getPaymentSettleResponse((name) =>
  response.headers.get(name)
)

console.log({ data, settlement })
```

The x402 client handles the `402` response, creates the payment signature, retries the request, and exposes the settlement response from the returned headers.

## Nuxt placement

For this Nuxt site, the cleanest first integration is buyer-side server code inside a Nitro route, because secrets stay on the server:

```ts
// server/api/paid-report.get.ts
import { x402Client } from '@x402/core/client'
import { ExactEvmScheme } from '@x402/evm/exact/client'
import { wrapFetchWithPayment } from '@x402/fetch'
import { privateKeyToAccount } from 'viem/accounts'

export default defineEventHandler(async () => {
  const privateKey = process.env.X402_PRIVATE_KEY as `0x${string}`

  if (!privateKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Missing X402_PRIVATE_KEY'
    })
  }

  const client = new x402Client()
  const signer = privateKeyToAccount(privateKey)

  client.register('eip155:*', new ExactEvmScheme(signer))

  const fetchWithPayment = wrapFetchWithPayment(fetch, client)
  const response = await fetchWithPayment('https://example.com/paid-endpoint')

  if (!response.ok) {
    throw createError({
      statusCode: response.status,
      statusMessage: await response.text()
    })
  }

  return response.json()
})
```

If the Nuxt app needs to sell access to its own endpoints, use a supported x402 server adapter such as Express, Hono, Fastify, or Next.js for the paid API surface. Keep the receiving wallet address in server-side environment variables and start on testnet before accepting production payments.

## Environment

```bash
X402_RECEIVING_WALLET=0xYourReceivingWallet
X402_PRIVATE_KEY=0xYourClientWalletPrivateKey
X402_FACILITATOR_URL=https://x402.org/facilitator
```

Never expose `X402_PRIVATE_KEY` to browser code. In Nuxt, only use it from server routes, server plugins, background jobs, or separate backend services.

## Checklist

1. Decide whether the app is a seller, buyer, or both.
2. Start on Base Sepolia or another supported test network.
3. Protect fixed-price endpoints with the `exact` scheme first.
4. Use server-side calls for any flow that needs a private key.
5. Log payment failures, settlement responses, and upstream response IDs.
6. Move to mainnet only after testing wallet funding, retries, and error handling.
