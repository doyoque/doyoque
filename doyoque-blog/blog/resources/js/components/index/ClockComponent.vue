<template>
  <div :class="['panel-card--blue-500 xl:col-start-5 md:col-start-4']">
    <h1 class="text-center txt-c--sm-txt-r--md-txt-r--xl-txt-r">Time: {{hours}}:{{minutes}}:{{seconds}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ClockComponent',
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    clockTime() {
      return setInterval(() => {
        const date = new Date()
        this.hours = this.checkDigit(date.getHours())
        this.minutes = this.checkDigit(date.getMinutes())
        this.seconds = this.checkDigit(date.getSeconds())
      }, 1000)
    },
    checkDigit(digit) {
      return ('0' + digit).slice(-2)
    }
  },
  mounted() {
    this.clockTime()
  }
}
</script>

