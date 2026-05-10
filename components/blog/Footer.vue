<script setup lang="ts">
defineProps<{
  footerMessage: string
}>()
</script>
<template>
  <footer class="border-t-2 border-[rgb(var(--color-line))] bg-[rgb(var(--color-bg))] px-5 py-6 text-center font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--color-muted))] transition-colors duration-300">
    {{ footerMessage }}
  </footer>
</template>
