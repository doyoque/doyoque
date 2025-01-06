<script setup lang="ts">
import { NavItem } from '@/utils/types/Nav'

defineProps<{
  navItems: NavItem[]
}>()

const isMenuOpen: boolean = ref(false)

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center">
        <img
          src="/smile_face.svg"
          class="h-8 mr-3 bg-white rounded-full"
          alt="Logo"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Doyoque</span>
      </a>

      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div
        id="navbar-default"
        :class="['w-full md:w-auto md:flex', { hidden: !isMenuOpen }]"
      >
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li v-for="item in navItems" :key="item.id">
            <NuxtLink
              :to="item.path"
              class="block py-2 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-gray-400 md:hover:text-blue-700 md:dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              exact-active-class="text-blue-700 dark:text-white"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
