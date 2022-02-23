<template>
  <div class="grid grid-cols-6 gap-x-4">
    <greetingCompoent />
    <randomQuoteComponent />
    <clockComponent />
    <techStackComponent />
    <footerComponent />
  </div>
</template>

<script>
import greetingCompoent from '@components/GreetingComponent'
import techStackComponent from '@components/TechStackComponent'
import FooterComponent from '@components/FooterComponent'
import RandomQuoteComponent from '@components/RandomQuoteComponent'
import ClockComponent from '@components/ClockComponent'

export default {
  name: 'Index',
  components: {
    greetingCompoent,
    RandomQuoteComponent,
    ClockComponent,
    techStackComponent,
    FooterComponent,
  }
}
</script>

