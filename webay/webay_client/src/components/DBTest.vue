<template>
  <div class="container">
    <!-- <p>{{ msg }}</p> -->
    <button class="component" type="btn btn-primary">{{msg}}</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DBTest',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage() {
      const path = 'http://localhost:5000/dbTest';
      axios
        .get(path)
        .then((result) => {
          this.msg = result.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
