<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ selectedCoach.hourlyRate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        
        <base-button v-if="!contactFormIsOpen" link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="badge-list">
        <base-badge
          v-for="area in selectedCoach.areas"
          :key="area"
          :caption="area"
        ></base-badge>
      </div>
      <p>{{ selectedCoach.description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`    
    },
    contactLink() {
      return this.$route.path + '/contact'
    },
    contactFormIsOpen() {
      return this.$route.path.endsWith('contact')
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/getCoach'](this.id);
  },
};
</script>

<style scoped>
.badge-list {
  margin-bottom: 0.5rem;
}
</style>