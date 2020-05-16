<template>
  <b-container class="text-left">
    <!-- <div class="tree-menu">
      <div :style="indent">{{ label }}</div>
      <tree-menu
        v-for="row in rows"
        :nodes="row.replies"
        :label="row.user"
        :depth="depth + 1"
        :key="row.postid"
      >
      </tree-menu>
    </div> -->
    <b-row v-for="post in rows" :key="post.postid">
      <b-card>
        <b-card-title> {{ post.title }} </b-card-title>
        <b-card-text> {{ post.user }}: {{ post.content }} </b-card-text>
        <b-row v-for="reply in post.replies" :key="reply.postid">
          <b-card>
            <b-card-text> {{ reply.user }}: {{ reply.content }} </b-card-text>
          </b-card>
        </b-row>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Forum',
  props: ['label', 'nodes', 'depth'],
  computed: {
    indent() {
      return { transform: `translate(${this.depth * 50}px)` };
    },
  },
  data() {
    return {
      rows: this.getForumPosts(),
    };
  },
  methods: {
    getForumPosts() {
      // const path = '/api/listings';
      // Axios.get(path).then((result) => {
      //   return result;
      // });
      return [
        {
          postid: 0,
          user: 'Vel',
          title: "What's an oatmeal?",
          content: 'I need to know',
          replies: [
            {
              replyid: 0,
              user: 'Vel',
              content: 'And why is it so thicc',
            },
            {
              replyid: 1,
              user: 'Vel',
              content: 'Seriously, i need to know',
            },
          ],
        },
      ];
    },
    // },
    formatForum() {
      const rows = [];
      const posts = this.getForumPosts();
      for (post_i = 0; post_i < posts.length; post_i++) {
        var op = posts[post_i];

        rows.push(row);
      }
      return rows;
    },
  },
};
</script>
