<template>
  <div :class="['panel-card--blue-500 col-start-2 col-span-2']">
    <h1>Today's quote: {{ quote }}</h1>
  </div>
</template>

<script>
export default {
  name: 'RandomQuoteComponent',
  data() {
    return {
      quote: 'the beginning'
    }
  }
}
</script>
