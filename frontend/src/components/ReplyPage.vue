<template>
  <b-row>
    <b-col class="cols-12">
      <b-card>
        <b-card-title>{{ post.title }} </b-card-title>
        <b-card-text> {{ post.username }}: {{ post.content }} </b-card-text>
        <b-card>
          <b-form-group>
            <b-form-input placeholder="Type Reply Here" v-model="reply_content"></b-form-input>
            <div class="text-right">
              <b-button variant="primary" v-on:click="submitReply()">Reply</b-button>
            </div>
          </b-form-group>
        </b-card>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import Axios from 'axios';
export default {
  name: 'ReplyPage',
  data() {
    return {
      post: Object,
      reply_content: '',
      op_id: this.$route.query.op_id,
    };
  },
  methods: {
    getOP() {
      // console.log('Query Incoming!');
      // console.log(this.$route.query.op_id);
      const path = '/api/forum/get_post';
      const payload = { op_id: this.op_id };
      // console.log(payload);
      Axios.post(path, payload).then((result) => {
        this.post = result.data;
      });
    },

    submitReply() {
      const path = '/api/forum/create_child';
      const payload = {};
      // if (this.$root.authenticated) {
      // payload.username = this.$root.loggedInAs;
      payload.username = 'AnonymousUser';
      payload.content = this.reply_content;
      payload.op_id = this.op_id;
      // console.log(payload);
      Axios.post(path, payload);
      this.$router.push('/forum');
    },
  },
  // },
  created() {
    this.getOP();
  },
};
</script>
