<template>
  <header>
    <h2>Find a Coach</h2>
    <nav>
      <ul>
        <li>
          <router-link to="/coaches">
            All Coaches
          </router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">
            Requests
          </router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
         <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.replace('/coaches')
    }
  }
};
</script>

<style scoped>
header {
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--primary-color-400);
  display: flex;
  padding: 0 4rem;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

h2 {
  color: white;
  display: inline-block;
}

ul {
  list-style: none;
  display: flex;
}

li {
  margin: 0 0.5rem;
}
a {
  display: inline-block;
  padding: 0.75rem 1rem;
  background-color: var(--primary-color-400);
  border: 1px solid transparent;
  cursor: pointer;
  color: var(--primary-color-800);
  font-family: sans-serif;
  font-size: 1rem;
  text-decoration: none;
}

a.router-link-active,
a:hover  {
  border: 1px solid var(--primary-color-800);
}
</style>