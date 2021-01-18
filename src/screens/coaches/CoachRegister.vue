<template>
  <div>
    <base-dialog
      :show="isPosting || !!error || success"
      title="Registering Coach"
      @close="closeDialog"
    >
      <base-spinner v-if="isPosting" />
      <p v-else-if="success">Coach Registered!</p>
      <p v-else-if="!!error">Error! -- {{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="saveData"></coach-form>
      </base-card>
    </section>
  </div>
</template>


<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  data() {
    return {
      error: null,
      isPosting: false,
      success: false,
    };
  },
  components: {
    CoachForm,
  },
  methods: {
    async saveData(formData) {
      try {
        this.isPosting = true;
        await this.$store.dispatch('coaches/registerCoach', formData);
        this.success = true;
      } catch (error) {
        console.error(error);
        this.error = error.message || 'Something went wrong.';
      } finally {
        this.isPosting = false;
      }
    },
    closeDialog() {
      if (this.error) this.error = false;
      else {
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>