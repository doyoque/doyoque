<script setup lang="ts">
const techStack = ref([
  'devicon-laravel-original colored',
  'devicon-nodejs-plain colored',
  'devicon-go-original-wordmark colored',
  'devicon-rails-plain colored',
  'devicon-nuxtjs-plain colored',
  'devicon-tailwindcss-original colored',
  'devicon-postgresql-plain colored',
  'devicon-mongodb-plain colored',
  'devicon-redis-plain colored',
  'devicon-docker-plain colored',
  'devicon-apachekafka-original colored',
  'devicon-bash-plain',
  'devicon-git-plain colored'
])

const goToIndex = () => {
  navigateTo('/')
}
</script>

<template>
  <div id="about-pages" class="stack-page cursor-pointer" @click="goToIndex">
    <section class="grid grid-cols-3 grid-rows-5 gap-2">
      <div
        v-for="(item, index) in techStack"
        :key="index"
        :class="index === 12 ? 'col-start-2' : ''"
        class="stack-item"
      >
        <i :class="item" />
      </div>
    </section>
  </div>
</template>
