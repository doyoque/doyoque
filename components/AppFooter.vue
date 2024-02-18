<script setup lang="ts">
const teckStack = ref([
  'devicon-laravel-original colored',
  'devicon-nodejs-plain colored',
  'devicon-go-original-wordmark colored',
  'devicon-postgresql-plain colored',
  'devicon-docker-plain colored',
  'devicon-nuxtjs-plain colored',
  'devicon-mongodb-plain colored',
  'devicon-bash-plain',
  'devicon-git-plain colored',
  'devicon-apachekafka-original colored',
  'devicon-rails-plain colored',
  'devicon-tailwindcss-original colored',
  'devicon-redis-plain colored'
])
</script>
<template>
  <footer class="footer">
    <div id="footer-wrapper" class="footer__wrapper">
      <div class="col-span-3 row-span-3 rounded-md">
        <ul class="ul_footer">
          <li
            v-for="(item, index) in teckStack"
            :key="index"
            class="text-4xl rounded-md bg-slate-300 p-1"
          >
            <i :class="item" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
