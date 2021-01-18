<template>
  <main>
    <base-dialog :show="!!error" title="Error" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <the-filter
        :filters="filters"
        @update-filters="updateFilters"
      ></the-filter>
    </section>
    <base-card>
      <section>
        <header>
          <base-button @click="loadCoaches({ forceRefresh: true })" mode="light"
            >Refresh</base-button
          >
          <base-button
            v-if="!userIsCoach && isLoggedIn && !isLoading"
            link
            to="/register"
            mode="dark"
            >Register as Coach</base-button
          >
          <base-button v-if="!isLoggedIn" link to="/auth?redirect=register">Login to Register as Coach</base-button>
        </header>
        <div v-if="isLoading">
          <base-spinner />
        </div>
        <ul v-else-if="hasCoaches">
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
  </main>
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
      isLoading: false,
      error: null,
    };
  },
  computed: {
    filteredCoaches() {
      let coaches = this.$store.getters['coaches/coaches'];
      // @func : REFINE RESULT FILTER (no filters == all results)
      // for (let [area, filterActive] of Object.entries(this.filters)) {
      //   if (filterActive)
      //     coaches = coaches.filter((coach) => coach.areas.includes(area));
      // }
      // return coaches;

      // @ func : TOGGLE SHOW FILTER (no 'filters' === no results)
      return coaches.filter((coach) => {
        if (this.filters.frontend && coach.areas.includes('frontend'))
          return true;
        if (this.filters.backend && coach.areas.includes('backend'))
          return true;
        if (this.filters.career && coach.areas.includes('career')) return true;
        return false;
      });
    },
    userIsCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    updateFilters(updateObj) {
      this.filters = updateObj;
    },
    async loadCoaches(config = {}) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', config);
      } catch (error) {
        this.error = error.message || 'Something went wrong.';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadCoaches();
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