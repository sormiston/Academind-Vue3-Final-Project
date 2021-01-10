<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item v-for="req in receivedRequests" :key="req.id" :email="req.userEmail" :message="req.message"></request-item> 
      </ul>
      <h3 v-if="!hasRequests">You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  components: {
    RequestItem
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  methods: {
    async loadRequests() {
      try {
      this.isLoading = true
      await this.$store.dispatch('requests/fetchRequests')
      this.isLoading = false
      } catch (err) {
        this.error = err.message || 'Something failed' 
      }
    }
  },
  created() {
    this.loadRequests()
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>