<template>
  <b-container class="pl-3 pr-3">
    <b-row class="pl-3 pr-3 pb-2">
      <b-col cols="8">
        <div class="text-left">
          <h1>{{ msg }}</h1>
        </div>
      </b-col>
      <b-col class="text-right">
        <b-button href="/signup" variant="warning">Sign Up</b-button>
        <b-button href="/login" variant="primary">Log In</b-button>
      </b-col>
    </b-row>

    <b-row class="pl-3 pr-3" v-for="listing in listings" :key="listing._id">
      <b-col>
        <b-card>
          <b-img>{{ listing.image }}</b-img>
          <b-card-title> {{ listing.title }} </b-card-title>
          <b-card-text> {{ listing.description }} </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: this.setMsg(),
      messageToUsers: 'Welcome to Webay',
      listings: this.getListings()
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
    getListings() {
      return [
        {
          title: 'New White Shoes',
          condition: 'New',
          image: '..\assets\black_converse.jpg',
          description: 'New white shoes for sale.',
          price: 23.99,
          live: true
        },
        {
          title: 'New Red Shoes',
          condition: 'New',
          image:
            'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwb3d41d44/images/a_107/167069C_A_107X1.jpg?sw=964',
          description: 'New red shoes for sale.',
          price: 20.99,
          live: true
        },
        {
          title: 'New Yellow Shoes',
          condition: 'New',
          image:
            'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw4fc0aed7/images/a_107/167070C_A_107X1.jpg?sw=964',
          description: 'New yellow shoes for sale.',
          price: 13.99,
          live: true
        }
      ];
    }
  }
};
</script>
