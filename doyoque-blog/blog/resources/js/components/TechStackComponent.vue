<template>
  <div :class="['panel-card--blue-500', classes]">
    <h1>Preferably tech-stack:</h1>
    <ul class="list-disc list-inside">
      <li v-for="(item, index) in techStack" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'

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
        'Golang',
        'Python'
      ]
    }
  },
  props: {
    colStart: { type: Number, default: 2 },
    colEnd: { type: Number, default: 3 }
  },
  setup(props) {
    props = reactive(props)

    // initialize computed
    const classes = computed(() => {
      return {
        [ `col-start-${props.colStart}` ]: true,
        [ `col-end-${props.colEnd}` ]: true
      }
    })

    return {
      classes: classes
    }
  }
}
</script>
