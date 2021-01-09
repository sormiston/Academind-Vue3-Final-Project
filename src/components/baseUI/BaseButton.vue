<template>
  <button v-if="!link" :class="colorScheme">
    <slot></slot>
  </button>
  <router-link v-else-if="link" :to="to" :class="colorScheme">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: 'dark',
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
  computed: {
    colorScheme() {
      return {
        'button--light': this.mode === 'light',
        'button--dark': this.mode === 'dark',
      };
    },
  },
};
</script>

<style scoped>
button,
a {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  border-radius: 25px;
  font: inherit;
  border: 1px solid var(--primary-color-300);
  text-decoration: none;
  margin-right: .5rem;
  margin-bottom: .5rem;
}

.button--light {
  background-color: #fff;
  color: var(--primary-color-300);
}

.button--light:hover,
.button-light:active {
  background-color: var(--primary-color-800);
}

.button--dark {
  background-color: var(--primary-color-300);
  color: #fff;
}

.button--dark:hover,
.button--dark:active {
  background-color: var(--primary-color-200);
}
</style>