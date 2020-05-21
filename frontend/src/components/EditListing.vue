<template>
  <b-row>
    <b-col class="cols-12">
      <b-card class="ml-4 mr-4">
        <b-card-title>Edit Listing</b-card-title>
        <b-form-group>
          <b-form-input v-model="listing.title"></b-form-input>
          <b-form-input v-model="listing.description"></b-form-input>
          <b-form-input v-model="listing.price" :type="number"></b-form-input>
          <b-form-select
            v-model="listing.condition"
            :options="conditions"
            class="mt-3"
          ></b-form-select>
          <div class="text-right">
            <b-button variant="primary" v-on:click="submit()">Submit</b-button>
          </div>
        </b-form-group>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import Axios from 'axios';
export default {
  name: 'EditListing',
  data() {
    return {
      listing: Object,
      _id: this.$route.query.id,
      conditions: [
        { value: null, text: 'Please select a condition.' },
        { value: 'New', text: 'New' },
        { value: 'Like-New', text: 'Like-New' },
        { value: 'Used', text: 'Used' },
      ],
    };
  },
  methods: {
    getListing() {
      const path = '/api/listings/get_listing';
      const payload = { id: this.$route.query.id };
      // console.log(this.$route.query.id);
      Axios.post(path, payload).then((result) => {
        this.listing = result.data;
      });
    },
    submit() {
      const path = '/api/listings/edit_listing';
      console.log(this.listing);
      Axios.post(path, this.listing);
      this.$router.push('/listings');
    },
  },
  // },
  created() {
    this.getListing();
  },
};
</script>
