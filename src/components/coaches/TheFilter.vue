<template>
  <base-card>
    <h3>Find Your Coach</h3>
    <form>
      <div class="control-group">
        <input id="spec-frontend" type="checkbox" name="specialization" /><label
          for="spec-frontend"
          >Frontend</label
        >
      </div>
      <div class="control-group">
        <input id="spec-backend" type="checkbox" name="specialization" /><label
          for="spec-backend"
          >Backend</label
        >
      </div>
      <div class="control-group">
        <input id="spec-career" type="checkbox" name="specialization" /><label
          for="spec-career"
          >Career</label
        >
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from '../baseUI/BaseCard.vue';
export default {
  components: {
    BaseCard,
  },
};
</script>

<style scoped>
h3 {
  margin: 0.5rem 0;
}
form {
  display: flex;
}
.control-group{
  margin-right: 1rem;
}
</style>