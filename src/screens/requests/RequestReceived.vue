<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-dialog :show="!!error" title="Error!" @close="closeDialog">
      {{ error }}
      </base-dialog>
      <base-spinner v-if="isLoading" />
      <ul v-if="hasRequests">
        <request-item
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  components: {
    RequestItem,
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
        this.isLoading = true;
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something failed';
      } finally {
        this.isLoading = false
      }
    },
    closeDialog() {
      this.error = null
    }
  },
  created() {
    this.loadRequests();
  },
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