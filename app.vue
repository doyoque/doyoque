<script setup lang="ts">
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
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
