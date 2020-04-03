<template>
  <b-container class="pl-4 pr-4">
    <b-row class="text-left mb-4">
      <h1>Welcome back! Let's get you logged in.</h1>
    </b-row>
    <b-row cols="3" class="text-center mb-4">
      <b-input-group prepend="Username" label="Username:">
        <b-form-input type="text" v-model="userData.username"></b-form-input>
      </b-input-group>
    </b-row>

    <b-row cols="3" class="text-center mb-4">
      <b-input-group prepend="Password ">
        <b-form-input
          type="password"
          v-model="userData.password"
        ></b-form-input>
      </b-input-group>
    </b-row>

    <b-row class="text-left mb-4">
      <b-alert :show="invalidLoginAttempt" variant="danger" dismissible>
        Username or password are incorrect. Did you mean to
        <a href="/signup"><strong>sign up</strong></a>
        instead?
      </b-alert>

      <b-alert :show="invalidInput" variant="danger" dismissible>
        Username and/or password fields are not filled out properly.
      </b-alert>
    </b-row>
    <b-row class="text-left mb-4">
      <b-button v-on:click="onSubmit" variant="primary">Log In</b-button>
    </b-row>
  </b-container>
</template>

<script>
const axios = require('axios').default;
axios.defaults.validateStatus = () => {
  return true;
};

export default {
  name: 'Login',
  data() {
    return {
      userData: {
        username: '',
        password: ''
      },
      invalidLoginAttempt: false,
      invalidInput: false
    };
  },
  methods: {
    initForm() {
      this.userData.username = '';
      this.userData.password = '';
      this.userData.valid = false;
    },
    userLogin(payload) {
      const path = '/api/login';
      axios.post(path, payload).then(response => {
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
      if (
        this.userData.username.length > 0 &&
        this.userData.password.length > 0
      ) {
        const payload = {
          username: this.userData.username,
          password: this.userData.password
        };
        // this.initForm();
        this.userLogin(payload);
      } else {
        this.invalidInput = true;
      }
    }
  },
  created() {}
};
</script>
