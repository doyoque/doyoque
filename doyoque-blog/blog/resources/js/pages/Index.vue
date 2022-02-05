<template>
  <div class="grid grid-cols-6 gap-x-4">
    <greetingCompoent />
    <techStackComponent />
  </div>
</template>

<script>
import greetingCompoent from '@components/GreetingComponent'
import techStackComponent from '@components/TechStackComponent'

export default {
  name: 'Index',
  components: {
    greetingCompoent,
    techStackComponent
  }
}
</script>

