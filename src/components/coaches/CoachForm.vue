<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !form.firstName.isValid }">
      <label for="firstname">First Name</label>
      <input
        v-model.trim="form.firstName.value"
        type="text"
        id="firstName"
        @blur="clearValidation('firstName')"
      />
      <small v-if="!form.firstName.isValid">First Name not valid.</small>
    </div>
    <div class="form-control" :class="{ invalid: !form.lastName.isValid }">
      <label for="lastName">Last Name</label>
      <input
        v-model.trim="form.lastName.value"
        type="text"
        id="lastName"
        @blur="clearValidation('lastName')"
      />
      <small v-if="!form.lastName.isValid">Last Name not valid.</small>
    </div>
    <div class="form-control" :class="{ invalid: !form.description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        cols="20"
        rows="5"
        v-model.trim="form.description.value"
        @blur="clearValidation('description')"
      ></textarea>
      <small v-if="!form.description.isValid">
        Please write a few lines about yourself.
      </small>
    </div>
    <div class="form-control" :class="{ invalid: !form.rate.isValid }">
      <label for="rate">Hourly Rate</label
      ><input
        v-model.number="form.rate.value"
        type="number"
        id="rate"
        @blur="clearValidation('rate')"
      />
      <small v-if="!form.rate.isValid">Please enter a valid number.</small>
    </div>
    <div class="form-control" :class="{ invalid: !form.areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div class="checkbox-control">
        <input
          v-model="form.areas.value"
          type="checkbox"
          id="frontend"
          value="frontend"
          @change="clearValidation('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div class="checkbox-control">
        <input
          v-model="form.areas.value"
          type="checkbox"
          id="backend"
          value="backend"
          @change="clearValidation('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div class="checkbox-control">
        <input
          v-model="form.areas.value"
          type="checkbox"
          id="career"
          value="career"
          @change="clearValidation('areas')"
        />
        <label for="career">Career Advice</label>
      </div>
      <small v-if="!form.areas.isValid"
        >Please enter at least one area of expertise.</small
      >
    </div>
    <small v-if="!formIsValid">Your form has invalid entries. See above.</small>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      form: {
        firstName: {
          value: '',
          isValid: true,
        },
        lastName: {
          value: '',
          isValid: true,
        },
        description: {
          value: '',
          isValid: true,
        },
        rate: {
          value: null,
          isValid: true,
        },
        areas: {
          value: [],
          isValid: true,
        },
      },

      formIsValid: true,
    };
  },

  methods: {
    clearValidation(input) {
      this.form[input].isValid = true;

      if (Object.values(this.form).every((prop) => prop.isValid === true))
        this.formIsValid = true;
    },

    validateForm() {
      this.formIsValid = true;
      if (this.form.firstName.value == '') {
        this.form.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.form.lastName.value == '') {
        this.form.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.form.description.value == '') {
        this.form.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.form.rate.value || this.form.rate.value <= 0) {
        this.form.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.form.areas.value.length === 0) {
        this.form.areas.isValid = false;
        this.formIsValid = false;
      }
    },

    submitForm() {
      this.validateForm();
      if (!this.formIsValid) return;
      const formData = {
        first: this.form.firstName.value,
        last: this.form.lastName.value,
        desc: this.form.description.value,
        rate: this.form.rate.value,
        areas: this.form.areas.value,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 0.5rem;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

.checkbox-control {
  margin-bottom: 0.75rem;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
  transform: scale(2);
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label,
.invalid h3,
.invalid small {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>