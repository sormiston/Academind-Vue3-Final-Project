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

:root {
  --primary-color-200: #260841;
  --primary-color-300: #3a105f;
  --primary-color-400: #3c198a;
  --primary-color-500: #6d1d8c;
  --primary-color-600: #881b6d;
  --primary-color-800: #c594e3;
}

html {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

body {
  margin: 0;
}

main {
  margin-top: 100px;
}
</style>