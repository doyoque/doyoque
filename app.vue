<script setup lang="ts">
const layout: string = 'default'
</script>
<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
