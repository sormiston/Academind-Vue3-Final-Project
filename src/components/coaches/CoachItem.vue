<template>
  <li class="item-card">
    <h2>{{ fullName }}</h2>
    <h3>${{ hourlyRate }}/hour</h3>
    <div class="badge-list" v-if="areas.length > 0">
      <base-badge
        v-for="area in areas"
        :key="area"
        :caption="area"
      ></base-badge>
    </div>
    <div class="action-buttons">
      <base-button link :to="contactLink" mode="light">Contact</base-button>
      <base-button link :to="detailLink" mode="dark">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    firstName: String,
    lastName: String,
    areas: Array,
    description: String,
    hourlyRate: Number,
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    detailLink() {
      return this.$route.path + '/' + this.id;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
};
</script>

<style scoped>
li.item-card {
  list-style: none;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #444;
  margin: 0.75rem auto;
}

.badge-list {
  margin-bottom: 0.5rem;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
}

h2,
h3 {
  margin: 0.5rem 0;
}
</style>