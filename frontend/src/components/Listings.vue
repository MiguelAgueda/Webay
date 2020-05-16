<template>
  <b-container class="text-center">
    <h1 class="pt-2">Let's make some noise!</h1>
    <h3 class="pb-4">Press on a button to hear the sound</h3>
    <b-row v-for="row in rows" :key="row[0].letter">
      <b-card-group deck class=" pb-4 mx-auto" v-for="letter in row" :key="letter.letter">
        <!-- <b-card-group> -->
        <b-card img-top style="max-width: 15rem;" :img-src="letter.image">
          <b-card-title>
            <b-button href="#" variant="success" @click.prevent="playSound(letter.sound)"
              ><H2>{{ letter.letter }}</H2></b-button
            >
          </b-card-title>
        </b-card>
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Listings',
  data() {
    return {
      rows: this.getAlphabetRows(),
    };
  },
  methods: {
    playSound(sound) {
      const audio = new Audio(sound);
      audio.play();
    },
    getListings() {
      const path = '/api/listings';
      Axios.get(path).then((result) => {
        return result;
      });
    },
    formatListings() {
      const rows = [];
      const listings = this.getListings();
      for (let i = 0; i < alphabet.length; i += itemsPerRow) {
        const row = [];
        for (let j = 0; j < itemsPerRow; j += 1) {
          if (i + j < alphabet.length) row.push(alphabet[i + j]);
        }
        rows.push(row);
      }
      return rows;
    },
  },
};
</script>
