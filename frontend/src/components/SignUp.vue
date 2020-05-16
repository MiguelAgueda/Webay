<template>
  <b-container class="text-left">
    <div role="group">
      <h1>Let's get you set up with an account</h1>
      <label for="username-input">
        <h6>Username:</h6>
      </label>
      <b-form-input id="username-input" v-model="userData.username" trim></b-form-input>
      <b-form-group id="password_input_group">
        <label for="password-input">
          <h6>Password:</h6>
        </label>
        <b-form-input
          id="password-input"
          type="password"
          v-model="userData.password"
          trim
        ></b-form-input>
      </b-form-group>

      <b-alert :show="invalidLoginAttempt" variant="danger">
        Username or password are incorrect. Did you mean to
        <a href="/signup"><strong>sign up</strong></a>
        instead?
      </b-alert>
      <b-alert :show="invalidInput" variant="warning">
        Please fill out username and password fields.
      </b-alert>

      <b-form-group>
        <b-button v-on:click="onSubmit" variant="warning">Sign Up</b-button>
      </b-form-group>
    </div>
  </b-container>
</template>

<script>
const axios = require('axios').default;

export default {
  name: 'SignUp',
  computed: {
    validationTooltipUsername() {
      return this.userData.username.length > 0;
    },
    validationTooltipPassword() {
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
      const path = '/api/signup';
      axios.post(path, payload).then((result) => {
        if (result.data.valid === 'true') {
          this.$router.replace({ name: 'Home' });
        }
      });
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
