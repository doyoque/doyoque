<script setup lang="ts">
const { data } = await useAsyncData('hello', () => queryContent('/').findOne())

useSeoMeta({
  title: 'Doyoque',
  description: 'Hi, I\'m Bayu. I\'ve been building software for over 8 years focusing on any web development like cloud infrastructure, design system, and web app.',
  ogTitle: 'Doyoque',
  ogDescription: 'Hi, I\'m Bayu. I\'ve been building software for over 8 years focusing on any web development like cloud infrastructure, design system, and web app.',
  ogType: 'article',
  ogUrl: 'https://doyoque.com',
  twitterCard: 'summary',
  twitterSite: '@74776F74696D65',
  twitterTitle: 'Doyoque',
  twitterDescription: 'Hi, I\'m Bayu. I\'ve been building software for over 8 years focusing on any web development like cloud infrastructure, design system, and web app.'
})
</script>

<template>
  <main class="page-shell">
    <section class="editorial-panel">
      <span class="kicker">Fullstack developer</span>
      <ContentRenderer class="content-prose article-prose home-prose" :value="data" />
    </section>
  </main>
</template>
