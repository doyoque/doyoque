<script setup lang="ts">
import { NavItem } from '@/utils/types/Nav'

const navItems: NavItem[] = [
  {
    id: 1,
    name: 'Articles',
    path: '/article'
  },
  {
    id: 2,
    name: 'Spit Out',
    path: '/spitout'
  },
  {
    id: 3,
    name: 'Contact',
    path: '/contact'
  }
]

const footerMessage: string = 'Copyright © 2025 Doyoque'
</script>
<template>
  <div id="blog-layout">
    <BlogNavbar :nav-items="navItems" />
    <div class="h-screen dark:bg-gray-800">
      <slot />
    </div>
    <BlogFooter :footer-message="footerMessage" />
  </div>
</template>
