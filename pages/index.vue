<script setup lang="ts">
const { data } = await useAsyncData('hello', () => queryContent('/').findOne())
</script>

<template>
  <div class="text-white h-screen flex items-center justify-center">
    <ContentRenderer :value="data" />
  </div>
</template>
