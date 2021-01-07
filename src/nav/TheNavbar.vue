<template>
  <header>
    
      <h2>Find a Coach</h2>
      <nav>
        <ul>
          <base-button :link="{ name: 'coaches' }" :text="'All Coaches'"></base-button>
          <base-button :link="{ name: 'requests' }" :text="'Requests'"></base-button>
        </ul>
      </nav>
    
  </header>
</template>

<script>
import BaseButton from '../components/baseUI/BaseButton.vue'
export default {
  components: {
    BaseButton
  }
}
</script>

<style scoped>
header {
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #3c198a;
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


</style>