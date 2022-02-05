<template>
  <div :class="['panel-card--blue-500', classes]">
    <p class="text-center">Copyright @ 2022 Doyoque</p>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'

export default {
  name: 'GreetingComponent',
  props: {
    colStart: { type: Number, default: 1 },
    colEnd: { type: Number, default: 7 }
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

