<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">First Name</label>
      <input v-model.trim="firstName" type="text" id="firstname" />
    </div>
    <div class="form-control">
      <label for="lastname">Last Name</label>
      <input v-model.trim="lastName" type="text" id="lastname" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        id="description"
        cols="20"
        rows="5"
        v-model.trim="description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label
      ><input v-model.number="rate" type="number" id="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div class="checkbox-control">
        <input v-model="areas" type="checkbox" id="frontend" value="frontend" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div class="checkbox-control">
        <input v-model="areas" type="checkbox" id="backend" value="backend" />
        <label for="backend">Backend Development</label>
      </div>
      <div class="checkbox-control">
        <input v-model="areas" type="checkbox" id="career" value="career" />
        <label for="career">Career Advice</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
    };
  },

// TO DO: DRY DRY DRY -- why have one data model for local state and another for data POST ??

  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };
      console.log(formData);
    },
  },
};
</script>

<style scoped>
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

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>