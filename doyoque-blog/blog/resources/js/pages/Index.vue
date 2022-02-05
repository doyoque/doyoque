<template>
  <div class="grid grid-cols-6 gap-x-4">
    <greetingCompoent />
    <techStackComponent />
    <footerComponent />
  </div>
</template>

<script>
import greetingCompoent from '@components/GreetingComponent'
import techStackComponent from '@components/TechStackComponent'
import FooterComponent from '@components/FooterComponent'

export default {
  name: 'Index',
  components: {
    greetingCompoent,
    techStackComponent,
    FooterComponent
  }
}
</script>

