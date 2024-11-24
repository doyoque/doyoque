<script setup lang="ts">
const layout: string = 'default'

useSeoMeta({
  title: 'Abiyoga Bayu Primadi - Doyoque',
  ogTitle: 'Abiyoga Bayu Primadi - Doyoque',
  description: 'Fullstack Developer blogging or something.',
  ogDescription: 'Fullstack Developer blogging or something.'
})
</script>
<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
