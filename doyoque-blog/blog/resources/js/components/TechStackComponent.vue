<template>
  <div :class="['panel-card--blue-500', classes]">
    <h1>Preferably tech-stack:</h1>
    <ul class="list-disc pl-4">
      <li>PHP</li>
      <li>Golang</li>
      <li>Nodejs</li>
      <li>Docker</li>
      <li>MySQL</li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'

export default {
  name: 'TechStackComponent',
  props: {
    colStart: { type: Number, default: 1 },
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

