<template>
  <section>
    <the-filter :filters="filters" @update-filters="updateFilters"></the-filter>
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
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      let coaches = this.$store.getters['coaches/coaches'];
      // @func : REFINE RESULT FILTER (no filters == all results)
      for (let [area, filterActive] of Object.entries(this.filters)) {
        if (filterActive)
          coaches = coaches.filter((coach) => coach.areas.includes(area));
      }
      return coaches;
      
      // @ func : TOGGLE SHOW FILTER (no 'filters' === no results)
      // return coaches.filter(coach => {
      //   if (this.filters.frontend && coach.areas.includes('frontend')) return true
      //   if (this.filters.backend && coach.areas.includes('backend')) return true
      //   if (this.filters.career && coach.areas.includes('career')) return true
      //   return false
      // })
      
      
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    updateFilters(updateObj) {
      this.filters = updateObj;
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