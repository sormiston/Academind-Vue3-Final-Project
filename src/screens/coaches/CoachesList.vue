<template>
  <div class="container">
    <section>
      <the-filter></the-filter>
    </section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>

        <ul v-if="hasCoaches">
          <li v-for="coach in filteredCoaches" :key="coach.id">
            {{ coach.firstName }}
          </li>
        </ul>
        <h3 v-else>No Coaches! Add one.</h3>
      </div>
    </section>
  </div>
</template>

<script>
import TheFilter from '../../components/coaches/TheFilter.vue';
export default {
  components: {
    TheFilter,
  },
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

</style>