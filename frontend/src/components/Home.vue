<template>
  <div class="Home">
    <div class="col-mb-4 md-4">
      <h1>{{ msg }}</h1>
      <a href="/signup" target="_blank" rel="noopener"> Sign Up </a>
      <a href="/login" target="_blank" rel="noopener"> Login </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: this.setMsg(),
      messageToUsers: 'Welcome to Webay',
    };
  },
  methods: {
    setMsg() {
      this.messageToUsers = 'Welcome to Webay';
      if (this.$root.authenticated) {
        this.messageToUsers += ', ' + this.$root.loggedInAs;
      }
      return this.messageToUsers;
    },
  },
};
</script>
