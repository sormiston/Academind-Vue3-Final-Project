<template>
  <the-navbar></the-navbar>
  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}



</style>