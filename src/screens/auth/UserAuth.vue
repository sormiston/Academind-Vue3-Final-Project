<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occured"
      @close="confirmDialog"
    >
      {{ error }}
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner />
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and password (must be at least 6 characters
          long.)
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button
          id="sign-up-button"
          type="button"
          mode="light"
          @click="switchAuthMode"
          >{{ switchModeButtonCaption }}</base-button
        >
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') return 'Login';
      else return 'Sign Up';
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') return 'Sign Up instead';
      else return 'Login instead';
    },
  },
  methods: {
    confirmDialog() {
      this.error = null;
    },
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      // send http request
      try {
        const payload = {
          email: this.email,
          password: this.password,
        };
        if (this.mode === 'login') {
          await this.$store.dispatch('login', payload);
        } else if (this.mode === 'signup') {
          await this.$store.dispatch('signup', payload);
        }
      } catch (error) {
        this.error = error.message || 'Failed to authenticate.  Try later.';
      } finally {
        this.isLoading = false;
        if (!this.error) {
        const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
        this.$router.replace(redirectUrl);
        }
      }

      
    },
    switchAuthMode() {
      if (this.mode === 'login') this.mode = 'signup';
      else if (this.mode === 'signup') this.mode = 'login';
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem 1rem 0;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

/* .sign-up-section {
  border-top: 1px solid #ccc;
  padding-top: 1rem;
}
.sign-up-section > * {
  display: block;
  margin: 0 auto;
} */
</style>