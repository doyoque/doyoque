<template>
  <div class="grid base-grid-cols">
    <greetingCompoent />
    <randomQuoteComponent />
    <clockComponent />
    <techStackComponent />
    <footerComponent />
  </div>
</template>

<script>
import greetingCompoent from '@components/GreetingComponent'
import FooterComponent from '@components/FooterComponent'
import techStackComponent from '@components/index/TechStackComponent'
import RandomQuoteComponent from '@components/index/RandomQuoteComponent'
import ClockComponent from '@components/index/ClockComponent'

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

