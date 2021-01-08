<template>
  <section>
    <the-filter></the-filter>
  </section>
  <base-card>
    <section>
      <header>
        <base-button mode="light">Refresh</base-button>
        <base-button link to="/register" mode="dark">
          Register as Coach</base-button
        >
      </header>

      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :areas="coach.areas"
          :description="coach.description"
          :hourlyRate="coach.hourlyRate"
        >
        </coach-item>
      </ul>
      <h3 v-else>No Coaches! Add one.</h3>
    </section>
  </base-card>
</template>

<script>
import TheFilter from '../../components/coaches/TheFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  components: {
    TheFilter,
    CoachItem,
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
header {
  display: flex;
  justify-content: space-between;
}
ul {
  padding-left: 0;
}
</style>