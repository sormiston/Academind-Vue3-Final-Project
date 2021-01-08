<template>
  <span class="badge" :class="colorScheme">{{ caption.toUpperCase() }} </span>
</template>

<script>
export default {
  props: ['caption'],
  computed: {
    colorScheme() {
      return {
        'badge--frontend': this.caption === 'frontend',
        'badge--backend': this.caption === 'backend',
        'badge--career': this.caption === 'career',
      };
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-radius: 30px;
  color: #fff;
  font-size: .85rem;
  vertical-align: bottom;
  margin-right: .5rem;
}

.badge--frontend {
  background-color: var(--primary-color-400);
}

.badge--backend {
  background-color: var(--primary-color-500);
}

.badge--career {
  background-color: var(--primary-color-600);
}
</style>