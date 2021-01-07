<template>
  <header>
    <h2>Find a Coach</h2>
    <nav>
      <ul>
        <li>
          <router-link to="/coaches">
            <button>All Coaches</button>
          </router-link>
        </li>
        <li>
          <router-link to="/requests">
            <button>Requests</button>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--primary-color);
  display: flex;
  padding: 0 4rem;
  justify-content: space-between;
  align-items: center;
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
button {
  padding: 0.75rem 1rem;
  background-color: var(--primary-color);
  border: 1px solid transparent;
  cursor: pointer;
  color: var(--secondary-color);
  font-family: sans-serif;
  font-size: 0.85rem;
}

a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

a.router-link-active > button,
a:hover > button {
  border: 1px solid var(--secondary-color);
}
</style>