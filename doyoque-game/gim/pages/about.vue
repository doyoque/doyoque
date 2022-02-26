<template>
  <div>
    <h1>About doyoque-gim</h1>
    <p>Doyoque-blog but game.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage',
  head() {
    return {
      title: 'Doyoque-gim',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Find out the philosophic thought about me playing some games.'
      }]
    }
  }
})
</script>
