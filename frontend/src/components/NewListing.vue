<template>
  <b-row>
    <b-col class="cols-12">
      <b-card class="ml-4 mr-4">
        <b-card-title>New Listing</b-card-title>
        <b-form-group>
          <b-form-input
            placeholder="Title"
            v-model="listing.title"
            class="mt-2 mb-2"
          ></b-form-input>
          <b-form-input
            placeholder="Description"
            v-model="listing.description"
            class="mt-2 mb-2"
          ></b-form-input>
          <b-form-input
            placeholder="Price"
            v-model="listing.price"
            :type="number"
            class="mt-2 mb-2"
          ></b-form-input>
          <b-form-select
            placeholder="Please select a condition."
            v-model="listing.condition"
            :options="conditions"
            class="mt-2 mb-2"
          ></b-form-select>
          <div class="text-right">
            <b-button variant="primary" v-on:click="submit()" class="mt-2 mb-2">Submit</b-button>
          </div>
        </b-form-group>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import Axios from 'axios';
export default {
  name: 'NewListing',
  data() {
    return {
      listing: {
        title: '',
        description: '',
        condition: null,
        price: 0.0,
      },
      _id: this.$route.query._id,
      conditions: [
        { value: null, text: 'Please select a condition.' },
        { value: 'New', text: 'New' },
        { value: 'Like-New', text: 'Like-New' },
        { value: 'Used', text: 'Used' },
      ],
    };
  },
  methods: {
    submit() {
      const path = '/api/listings/create_listing';
      Axios.post(path, this.listing);
      this.$router.push('/listings');
    },
  },
  // },
  // created() {
  //   this.getListing();
  // },
};
</script>
