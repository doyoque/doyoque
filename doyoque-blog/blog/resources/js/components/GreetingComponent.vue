<template>
  <div :class="['panel-card--blue-500', classes ? classes : colClasses]">
    <h1>Welcome to doyoque-blog!</h1>
    <p>
      this blog it's ain't much, but like a place that keep reminding me about
      something that I easily forget.
    </p>
    <p>
      Anyway if you easly get bored with this overwhelming index page, go
      straight to the
      <a href="#" class="underline decoration-sky-500">blog</a> content section
      (consider this page as my <b>CV</b> section).
    </p>
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
  data() {
    return {
      colClasses:'col-start-1 col-end-7'
    }
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
