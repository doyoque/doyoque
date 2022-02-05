<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log("App working!");
  },
};
</script>
