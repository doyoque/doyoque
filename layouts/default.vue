<script setup lang="ts">
import type { NavItem } from '@/utils/types/Nav'

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
const isDarkTheme = useState<boolean>('is-dark-theme', () => true)

const applyTheme = (): void => {
  if (!import.meta.client) {
    return
  }

  document.documentElement.classList.toggle('dark', isDarkTheme.value)
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light')
}

const toggleTheme = (): void => {
  isDarkTheme.value = !isDarkTheme.value
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    isDarkTheme.value = savedTheme === 'dark'
  } else {
    isDarkTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  applyTheme()
})

watch(isDarkTheme, applyTheme)
</script>
<template>
  <div id="blog-layout" class="min-h-screen bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] transition-colors duration-300">
    <BlogNavbar
      :is-dark-theme="isDarkTheme"
      :nav-items="navItems"
      @toggle-theme="toggleTheme"
    />
    <div>
      <slot />
    </div>
    <BlogFooter :footer-message="footerMessage" />
  </div>
</template>
