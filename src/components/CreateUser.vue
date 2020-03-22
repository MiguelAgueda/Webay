<template>
  <div role="group">
    <h1>Welcome! Let's get you set up with an account</h1>
    <label for="username-input-live"><h6>Username:</h6></label>
    <b-form-input
      id="username-input-live"
      v-model="userData.username"
      :state="usernameState"
      aria-describedby="input-live-help input-live-feedback"
      trim
    ></b-form-input>

    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="username-input-live-feedback"
      >Enter at least 1 letter</b-form-invalid-feedback
    >

    <!-- This is a form text block (formerly known as help block) -->
    <b-form-text id="username-input-live-help">Your username must be unique.</b-form-text>

    <b-form-group id="password_input_group">
      <label for="password-input-live"><h6>Password:</h6></label>
      <b-form-input
        id="password-input-live"
        type="password"
        v-model="userData.password"
        :state="passwordState"
        aria-describedby="password-input-live-help input-live-feedback"
        trim
      ></b-form-input>

      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback id="password-input-live-feedback"
        >Enter at least 1 letter</b-form-invalid-feedback
      >

      <!-- This is a form text block (formerly known as help block) -->
      <b-form-text id="password-input-live-help">Is your password unique?</b-form-text>
    </b-form-group>

    <b-form-group>
      <b-button v-on:click="onSubmit" variant="primary">Submit</b-button>
    </b-form-group>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateUser',
  computed: {
    usernameState() {
      return this.userData.username.length > 0;
    },
    passwordState() {
      return this.userData.password.length > 0;
    },
    submitState() {
      return this.userData.username.length > 0 && this.userData.password.length > 0;
    },
  },
  data() {
    return {
      userData: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    initForm() {
      this.userData.username = '';
      this.userData.password = '';
      this.userData.valid = false;
    },
    postUserData(payload) {
      const path = 'http://localhost:5000/createUser';
      axios.post(path, payload);
    },
    onSubmit(event) {
      event.preventDefault();
      if (this.userData.username.length > 0 && this.userData.password.length > 0) {
        const payload = {
          username: this.userData.username,
          password: this.userData.password,
        };
        this.initForm();
        this.postUserData(payload);
      }
    },
  },
  created() {},
};
</script>
