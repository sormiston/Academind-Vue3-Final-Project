<template>
  <div class="container">
    <section>FILTER</section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
        <ul v-if="hasCoaches">
          <li v-for="coach in filteredCoaches" :key="coach.id">
            {{ coach.firstName }}
          </li>
        </ul>
        <h3 v-else>No Coaches!  Add one.</h3>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 640px;
  border: solid 1px #ccc;
}
</style>