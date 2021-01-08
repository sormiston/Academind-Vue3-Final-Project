<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <form>
      <div class="control-group">
        <input
          id="frontend"
          type="checkbox"
          :checked="filters.frontend"
          @change="updateFilters"
        /><label for="spec-frontend">Frontend</label>
      </div>
      <div class="control-group">
        <input
          id="backend"
          type="checkbox"
          :checked="filters.backend"
          @change="updateFilters"
        /><label for="spec-backend">Backend</label>
      </div>
      <div class="control-group">
        <input
          id="career"
          type="checkbox"
          :checked="filters.career"
          @change="updateFilters"
        /><label for="spec-career">Career</label>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  props: ['filters'],
  emits: ['update-filters'],

  methods: {
    updateFilters(e) {
      const updated = e.target.id;
      const value = e.target.checked;
      let updateObj = {
        ...this.filters,
        [updated]: value,
      };
      this.$emit('update-filters', updateObj);
    },
  },
};
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}
form {
  display: flex;
}
.control-group {
  margin-right: 1rem;
}
</style>