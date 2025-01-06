<script setup lang="ts">
defineProps<{
  footerMessage: string
}>()
</script>
<template>
  <div class="bg-white text-center dark:bg-gray-900 dark:text-slate-300 py-5">
    {{ footerMessage }}
  </div>
</template>
