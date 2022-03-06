<style scoped>
ul>li {
  list-style: none;
}
</style>
<template>
  <div :class="['panel-card--blue-500 xl-c-s-2--xl-c-e-3--md-c-s-1--md-e-2']">
    <h1>Preferably tech-stack:</h1>
    <ul class="list-disc list-inside">
      <li
        v-for="(item, index) in techStack"
        :key="index"><i :class="[`colored devicon-${item.toLowerCase()}-plain colored`]"></i> {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TechStackComponent',
  data() {
    return {
      techStack: [
        'Laravel',
        'MySQL',
        'Ruby',
        'Nodejs',
        'TypeScript',
        'Docker',
        'Go',
        'Python'
      ],
      devIcons: [
        'laravel',
        ''
      ]
    }
  }
}
</script>
