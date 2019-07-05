<template>
  <div style="text-align: center">
    <div v-for="post in posts" :key="post.id">
      <h1>{{post.title}}</h1>
      <button @click="viewPost(post.id)">View post</button>
      <button @click="editPost(post.id)">Edit post</button>
      <button @click="deletePost(post.id)">Delete post</button>
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
  },
  methods: {
    viewPost(id) {
      return this.$router.push("/post/" + id);
    },

    editPost(id) {
      return this.$router.push("/edit/" + id);
    },

    deletePost(id) {
      postsService
        .delete(id)
        .then(() => this.$router.go())
        .catch(e => {
          alert(e);
        });
    }
  }
};
</script>
