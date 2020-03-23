<template>
  <div role="group">
    <h1>Welcome Back! Let's get you logged in.</h1>
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
      <b-button v-on:click="onSubmit" variant="primary">Submit</b-button>
    </b-form-group>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  name: 'Login',
  data() {
    return {
      userData: {
        username: '',
        password: '',
      },
      invalidLoginAttempt: false,
      invalidInput: false,
    };
  },
  methods: {
    initForm() {
      this.userData.username = '';
      this.userData.password = '';
      this.userData.valid = false;
    },
    userLogin(payload) {
      const path = 'http://localhost:5000/api/login';
      axios.post(path, payload).then((response) => {
        console.log(response);
        if (response.data.valid === 'true') {
          console.log('User authenticated.');
          this.$root.authenticated = true;
          this.$root.loggedInAs = payload.username;
          this.$router.replace({ name: 'Home' });
        } else {
          this.invalidLoginAttempt = true;
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
        // this.initForm();
        this.userLogin(payload);
      } else {
        console.log('Got Here!');
      }
    },
  },
  created() {},
};
</script>
