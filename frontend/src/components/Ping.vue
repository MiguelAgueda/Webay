<template>
  <div class="container">
    <button type="button" class="btn btn-primary">{{ msg }}</button>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  name: 'Ping',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage() {
      const path = '/api/ping';
      axios
        .get(path)
        .then((result) => {
          this.msg = result.data;
        })
        .catch((error) => {
          console.log('Error in Pinging.');
          console.error(error);
        });
    },
  },

  created() {
    this.getMessage();
  },
};
</script>
