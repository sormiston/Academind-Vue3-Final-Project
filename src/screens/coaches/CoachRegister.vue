<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>


<script>
import CoachForm from '../../components/coaches/CoachForm.vue'
export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(formData) {
      console.log("saveData firing");
      this.$store.dispatch('coaches/registerCoach', formData)
      this.$router.replace('/coaches')
    }
  }
}
</script>