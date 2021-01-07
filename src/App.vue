<template>
  <the-navbar></the-navbar>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavbar from './nav/TheNavbar.vue';
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  font-smoothing: auto;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

body {
  margin: 0;
}
</style>