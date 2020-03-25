<template>
  <b-container class="pl-4 pr-4">
    <b-row class="text-left mb-4">
      <h1>Welcome! Let's get you set up with an account</h1>
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
      <b-button v-on:click="onSubmit" variant="warning">Sign Up</b-button>
    </b-row>
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
      return (
        this.userData.username.length > 0 && this.userData.password.length > 0
      );
    }
  },
  data() {
    return {
      userData: {
        username: '',
        password: ''
      }
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
      axios.post(path, payload).then(result => {
        if (result.data.valid === 'true') {
          this.$root.authenticated = true;
          this.$root.loggedInAs = payload.username;
          this.$router.replace({ name: 'Home' });
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
        this.postUserData(payload);
      }
    }
  },
  created() {}
};
</script>
