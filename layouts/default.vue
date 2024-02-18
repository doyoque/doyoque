<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-slate-900'
  }
})
</script>
<template>
  <div class="default__layout">
    <slot />
    <!-- <AppFooter /> -->
  </div>
</template>
