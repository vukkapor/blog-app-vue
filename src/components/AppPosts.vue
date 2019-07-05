<template>
  <div style="text-align: center">
    <div v-for="post in posts" :key="post.id">
      <h1>{{post.title}}</h1>
      {{formatDate(post.createdAt)}}
      <br>
      {{diffForHumans(post.createdAt)}}
      <p>{{commentCount(post)}} comments on this post</p>
      <button @click="viewPost(post.id)">View post</button>
      <button @click="editPost(post.id)">Edit post</button>
      <button @click="deletePost(post.id)">Delete post</button>
    </div>
  </div>
</template>

<script>
import { postsService } from "../services/posts";
import { dateMixin } from "../mixins/DateMixins";
export default {
  mixins: [dateMixin],

  data() {
    return {
      posts: [],
      counter: 0
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
    },

    commentCount(post) {
      this.counter = 0;
      return (this.counter = post.comments.length);
    }
  }
};
</script>
