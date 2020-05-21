<template>
  <b-container class="text-left">
    <h1>Forum</h1>
    <b-row class="pt-2 pb-2" v-for="post in rows" :key="post.title">
      <b-col class="cols-12">
        <b-card>
          <b-card-title> {{ post.title }} </b-card-title>
          <b-card-text> {{ post.content }} </b-card-text>
          <b-row class="pt-2 pb-2" v-for="reply in post.replies" :key="reply.content">
            <b-col class="cols-12">
              <b-card>
                <b-card-text> {{ reply.content }} </b-card-text>
              </b-card>
            </b-col>
          </b-row>
          <div class="text-right">
            <b-button variant="primary" v-on:click="replyPage(post._id)">Reply</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Forum',
  data() {
    return {
      rows: '',
    };
  },
  methods: {
    replyPage(op_id = '') {
      // Change to reply page with op_id reference.
      this.$router.push({ path: '/ReplyPage', query: { op_id: op_id } });
    },
    getForumPosts() {
      const path = '/api/forum/get_posts';
      Axios.get(path).then((result) => {
        this.rows = result.data;
      });
    },
    replyToPost(_id) {
      // Send reply to backend for storage.
      const path = '/api/forum/create_post';
      Axios.post(path);
    },
  },
  created() {
    this.getForumPosts();
  },
};
</script>
