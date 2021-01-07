<template>
  <div class="container">
    <section>FILTER</section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to='/register'>Register as Coach</router-link>
        <ul>LIST OF CHOICES</ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    max-width: 640px;
    border: solid 1px #ccc;
  }
</style>