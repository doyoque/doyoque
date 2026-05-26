<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/article')
    .where({ _path: { $ne: '/article' } })
    .sort({ date: -1 })
    .find()
)

const sortedArticles = computed(() => {
  return [...(articles.value ?? [])].sort((current, next) => {
    const nextDate = Date.parse(next.date ?? '')
    const currentDate = Date.parse(current.date ?? '')
    const dateDifference = (Number.isNaN(nextDate) ? 0 : nextDate) - (Number.isNaN(currentDate) ? 0 : currentDate)

    if (dateDifference !== 0) {
      return dateDifference
    }

    return String(next._path).localeCompare(String(current._path))
  })
})

useSeoMeta({
  title: 'Doyoque - Articles',
  description: 'Available articles from Doyoque.',
  ogTitle: 'Doyoque - Articles',
  ogDescription: 'Available articles from Doyoque.',
  ogType: 'article',
  ogUrl: 'https://doyoque.com/article',
  twitterCard: 'summary',
  twitterSite: '@74776F74696D65',
  twitterTitle: 'Doyoque - Articles',
  twitterDescription: 'Available articles from Doyoque.'
})
</script>

<template>
  <main class="page-shell">
    <section class="editorial-panel">
      <span class="kicker">Writing index</span>
      <div class="content-prose">
        <h1>Articles</h1>
        <div class="article-list">
          <NuxtLink
            v-for="article in sortedArticles"
            :key="article._path"
            :to="article._path"
            class="article-card"
          >
            <span class="article-meta">{{ article.date ?? 'Undated' }}</span>
            <strong>{{ article.title }}</strong>
            <p>{{ article.description }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
