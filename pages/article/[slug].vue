<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join('/')
  : route.params.slug

const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryContent(`/article/${slug}`).findOne()
)

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found'
  })
}

useSeoMeta({
  title: () => article.value?.title ?? 'Doyoque - Article',
  description: () => article.value?.description ?? '',
  ogTitle: () => article.value?.title ?? 'Doyoque - Article',
  ogDescription: () => article.value?.description ?? '',
  ogType: 'article',
  twitterCard: 'summary',
  twitterSite: '@74776F74696D65',
  twitterTitle: () => article.value?.title ?? 'Doyoque - Article',
  twitterDescription: () => article.value?.description ?? ''
})
</script>

<template>
  <main class="page-shell">
    <article class="editorial-panel">
      <div>
        <NuxtLink to="/article" class="kicker hover:text-[rgb(var(--color-text))]">
          Articles / {{ article?.date ?? 'Undated' }}
        </NuxtLink>
      </div>
      <ContentRenderer
        v-if="article"
        class="content-prose article-prose"
        :value="article"
      />
    </article>
  </main>
</template>
