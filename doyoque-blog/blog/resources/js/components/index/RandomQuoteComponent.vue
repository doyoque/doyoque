<template>
  <div :class="['panel-card--blue-500 xl-c-st-2--xl-c-sp-2--md-c-st-1--md-c-sp-2--sm-sp-2']">
    <h1 class="text-center txt-c--sm-txt-l--md-txt-l--xl-txt-l">Today's quote: {{ quote }}</h1>
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
