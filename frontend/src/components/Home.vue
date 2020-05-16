<template>
  <b-container class="text-left">
    <!-- <h1 class="pt-2">Let's make some noise!</h1> -->
    <!-- <h3 class="pb-4">Press on a button to hear the sound</h3> -->
    <!-- <b-row v-for="row in rows" :key="row[0].letter"> -->
    <!-- <div class="Home"> -->
    <b-row>
      <b-col sm="6">
        <h1>{{ msg }}</h1>
      </b-col>
      <b-col sm="6" class="mt-2">
        <b-button href="/listings" target="_self" variant="dark">Listings</b-button>
        <b-button href="/forum" target="_self" variant="dark">Forum</b-button>
        <b-button href="/signup" target="_self" variant="warning"> Sign Up </b-button>
        <b-button href="/login" target="_self" variant="primary"> Log In </b-button>
      </b-col>
    </b-row>
    <!-- </div> -->
  </b-container>
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
