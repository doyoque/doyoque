<script setup lang="ts">
const layout: string = 'default'

useSeoMeta({
  title: 'Abiyoga Bayu Primadi - Doyoque',
  description: 'Fullstack Developer blogging or something.',
  ogTitle: 'Abiyoga Bayu Primadi - Doyoque',
  ogType: 'article',
  ogUrl: 'https://doyoque.vercel.app/',
  ogDescription: 'Fullstack Developer blogging or something.',
  twitterCard: 'summary',
  twitterSite: '@4E4F57',
  twitterTitle: 'Abiyoga Bayu Primadi - Doyoque',
  twitterDescription: 'Fullstack Developer blogging or something.'
})
</script>
<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
