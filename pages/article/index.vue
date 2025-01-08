<script setup lang="ts">
const { data } = await useAsyncData('article', () => queryContent('/article').findOne())

useSeoMeta({
  title: 'Doyoque - Articles',
  description: 'Don\'t know what to write just stay tune.',
  ogTitle: 'Doyoque - Articles',
  ogDescription: 'Don\'t know what to write just stay tune.',
  ogType: 'article',
  ogUrl: 'https://doyoque.vercel.app/',
  twitterCard: 'summary',
  twitterSite: '@4E4F57',
  twitterTitle: 'Doyoque - Articles',
  twitterDescription: 'Don\'t know what to write just stay tune.'
})
</script>

<template>
  <div class="text-white h-screen flex items-center justify-center">
    <ContentRenderer :value="data" />
  </div>
</template>
