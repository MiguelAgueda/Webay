<template>
  <b-container class="text-left">
    <div class="text-right">
      <b-row>
        <b-col class="cols-12">
          <b-button href="/new_listing" variant="primary">New Listing</b-button>
        </b-col>
      </b-row>
    </div>
    <b-row v-for="listing in listings" :key="listing._id">
      <b-col class="cols-12">
        <b-card>
          <b-card-title> {{ listing.title }} </b-card-title>
          <b-card-subtitle> {{ listing.description }} </b-card-subtitle>
          <b-card-text> ${{ listing.price }} </b-card-text>
          <!-- Insert delete/edit icons -->
          <div class="text-right">
            <b-button v-on:click="editListing(listing._id)"
              ><b-icon-pencil></b-icon-pencil
            ></b-button>
            <b-button v-on:click="deleteListing(listing._id)"
              ><b-icon-trash></b-icon-trash
            ></b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Listings',
  data() {
    return {
      listings: [],
    };
  },
  methods: {
    getListings() {
      const path = '/api/listings/get_listings';
      Axios.get(path).then((result) => {
        this.listings = result.data;
      });
    },
    editListing(_id) {
      this.$router.push({ path: '/edit_listing', query: { id: _id } });
    },
    deleteListing(_id) {
      const path = '/api/listings/delete_listing';
      Axios.post(path, { _id: _id });
      this.getListings();
    },
  },
  created() {
    this.getListings();
    // console.log(this.$router.query.id);
  },
};
</script>
