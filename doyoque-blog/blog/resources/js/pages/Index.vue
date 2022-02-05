<template>
  <div>
    <h1>hello world</h1>
    <greetingCompoent />
  </div>
</template>

<script>
import greetingCompoent from '@components/GreetingComponent'

export default {
  name: 'Index',
  components: {
    greetingCompoent,
  }
}
</script>

