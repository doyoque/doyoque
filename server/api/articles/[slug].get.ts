import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const slugParam = event.context.params?.slug
  const slug = Array.isArray(slugParam) ? slugParam.join('/') : slugParam

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing article slug'
    })
  }

  const article = await serverQueryContent(event, `/article/${slug}`).findOne()

  if (!article) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Article not found'
    })
  }

  if (!article.exclusive) {
    return { article }
  }

  const runtimeConfig = useRuntimeConfig()

  return serveExclusiveArticle(event, article, runtimeConfig.x402)
})
