<script setup lang="ts">
import type { NavItem } from '@/utils/types/Nav'

defineProps<{
  isDarkTheme: boolean
  navItems: NavItem[]
}>()

const emit = defineEmits<{
  'toggle-theme': []
}>()

const isMenuOpen = ref(false)

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
  <nav class="sticky top-0 z-20 border-b-2 border-[rgb(var(--color-line))] bg-[rgb(var(--color-bg))]/95 backdrop-blur transition-colors duration-300">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 md:px-8 lg:px-10">
      <NuxtLink to="/" class="flex min-w-0 items-center gap-3">
        <img
          src="/smile_face.svg"
          class="h-8 w-8 rounded-full border-2 border-[rgb(var(--color-line))] bg-white"
          alt="Logo"
        />
        <span class="truncate font-mono text-sm font-black uppercase tracking-[0.18em] text-[rgb(var(--color-text))]">Doyoque</span>
      </NuxtLink>

      <div class="flex items-center gap-2 md:order-2">
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center border-2 border-[rgb(var(--color-line))] bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text))] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--color-accent))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))] focus:ring-offset-2 focus:ring-offset-[rgb(var(--color-bg))]"
          :aria-label="isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'"
          :title="isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="emit('toggle-theme')"
        >
          <span aria-hidden="true" class="font-mono text-base font-black">{{ isDarkTheme ? 'L' : 'D' }}</span>
        </button>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center border-2 border-[rgb(var(--color-line))] bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text))] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--color-accent))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))] focus:ring-offset-2 focus:ring-offset-[rgb(var(--color-bg))] md:hidden"
          aria-controls="navbar-default"
          :aria-expanded="isMenuOpen"
          title="Open main menu"
          @click="toggleMenu"
        >
          <span class="sr-only">Open main menu</span>
          <span aria-hidden="true" class="font-mono text-lg font-black">=</span>
        </button>
      </div>

      <div
        id="navbar-default"
        :class="['w-full md:flex md:w-auto md:items-center', { hidden: !isMenuOpen }]"
      >
        <ul class="mt-3 grid gap-1 border-2 border-[rgb(var(--color-line))] bg-[rgb(var(--color-surface))] p-2 font-mono text-xs font-black uppercase tracking-[0.16em] md:mt-0 md:flex md:gap-2 md:border-0 md:bg-transparent md:p-0">
          <li v-for="item in navItems" :key="item.id">
            <NuxtLink
              :to="item.path"
              class="block px-3 py-3 text-[rgb(var(--color-muted))] transition hover:bg-[rgb(var(--color-accent))] hover:text-black md:py-2"
              exact-active-class="bg-[rgb(var(--color-text))] text-[rgb(var(--color-bg))]"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
