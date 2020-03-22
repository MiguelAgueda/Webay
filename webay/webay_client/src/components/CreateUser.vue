<template>
  <div class="form-group">
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" class="form-control" v-model="userData.username" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" class="form-control" v-model="userData.password" />
    </div>
    <button class="btn btn-primary" @click.prevent="onSubmit">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateUser',
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
    },
    postUserData(payload) {
      const path = 'http://localhost:5000/createUser';
      axios.post(path, payload);
    },
    onSubmit() {
      const payload = {
        username: this.userData.username,
        password: this.userData.password,
      };
      this.initForm();
      this.postUserData(payload);
    },
  },
  created() {},
};
</script>
