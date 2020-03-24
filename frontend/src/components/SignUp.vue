<template>
  <form class="need-validation" novalidate>
    <h1>Welcome! Let's get you set up with an account</h1>
    <div class="form-group row">
      <div class="col-md-2 mb-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <span
              class="input-group-text"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              >@</span
            >
          </div>
          <input
            type="text"
            class="form-control"
            id="validationTooltipUsername"
            v-model="userData.username"
            aria-describedby="validationTooltipUsernamePrepend"
            placeholder="Username"
            required
          />
          <div class="invalid-tooltip">
            Please choose a unique and valid username.
          </div>
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="input-group">
          <input
            type="password"
            class="form-control"
            id="validationTooltipPassword"
            v-model="userData.password"
            placeholder="Password"
            required
          />
          <div class="invalid-tooltip">
            Please choose a password.
          </div>
        </div>
      </div>
      <div for="submitButton" class="col-md-4 mb-3">
        <b-button v-on:click="onSubmit" variant="primary">Join</b-button>
      </div>
    </div>
  </form>
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
