<script setup lang="ts">
const { data } = await useAsyncData('hello', () => queryContent('/').findOne())

useSeoMeta({
  title: 'Doyoque',
  description: 'Fullstack Developer blogging or something.',
  ogTitle: 'Doyoque',
  ogDescription: 'Fullstack Developer blogging or something.',
  ogType: 'article',
  ogUrl: 'https://doyoque.vercel.app/',
  twitterCard: 'summary',
  twitterSite: '@4E4F57',
  twitterTitle: 'Doyoque',
  twitterDescription: 'Fullstack Developer blogging or something.'
})
</script>

<template>
  <div class="text-white h-screen flex items-center justify-center">
    <ContentRenderer :value="data" />
  </div>
</template>
