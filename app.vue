<script setup lang="ts">
const route = useRoute()
const routeName = route.name
const pageList = ['blog']
const layoutName = pageList.includes(routeName) ? routeName : 'doyoque'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
    }
  ]
})

useSeoMeta({
  title: 'Abiyoga Bayu Primadi - Doyoque',
  ogTitle: 'Abiyoga Bayu Primadi - Doyoque',
  description: 'Just a developer.',
  ogDescription: 'Just a developer.'
})
</script>
<template>
  <div>
    <NuxtLayout :name="layoutName">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
