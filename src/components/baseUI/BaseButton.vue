<template>
  
    <li>
        <router-link :to="link"><button>{{ text }}</button></router-link>
    </li>
  
  
</template>

<script>
export default {
  props: ['link', 'text']
}
</script>

<style scoped>
li {
  margin: 0 0.5rem;
}
button {
  padding: .75rem 1rem;
  background-color: #3c198a;
  border: 1px solid transparent;
  cursor: pointer;
  color: #c594e3;
  font-family: sans-serif;
  font-size: .85rem;
}

a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

a.router-link-active > button,
a:hover > button {
  border: 1px solid rgb(197, 148, 227);
}
</style>