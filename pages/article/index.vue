<script setup lang="ts">
const { data } = await useAsyncData('article', () => queryContent('/article').findOne())
</script>

<template>
  <div class="text-white h-screen flex items-center justify-center">
    <ContentRenderer :value="data" />
  </div>
</template>
