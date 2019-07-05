<template>
  <div>
    <div style="text-align: center">
      <h1>{{post.title}}</h1>
      <p>{{post.text}}</p>
      <p>{{counter}} comments on this post</p>
      <h4>Comments:</h4>
      <div v-for="comment in post.comments" :key="comment.id">
        <p>{{comment.text}}</p>
      </div>
    </div>
    <add-comment></add-comment>
  </div>
</template>

<script>
import { postsService } from "../services/posts";
import AddComment from "../components/AddComment";
export default {
  components: {
    AddComment
  },
  data() {
    return {
      post: {},
      counter: 0
    };
  },
  mounted() {
    if (this.$route.params.id) {
      postsService
        .get(this.$route.params.id)
        .then(response => {
          this.post = response.data;
          this.counter = this.post.comments.length;
        })
        .catch(e => {
          alert(e);
        });
    }
  }
};
</script>