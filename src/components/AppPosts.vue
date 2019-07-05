<template>
  <div style="text-align: center">
    <div v-for="post in posts" :key="post.id">
      <h1>{{post.title}}</h1>
      <p>{{post.text}}</p>
    </div>
  </div>
</template>

<script>
import { postsService } from "../services/posts";
export default {
  data() {
    return {
      posts: []
    };
  },

  created() {
    postsService
      .getAll()
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        alert(e);
      });
  }
};
</script>
