<template>
  <div>
    <div style="text-align: center">
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
      post: {}
    };
  },
  mounted() {
    if (this.$route.params.id) {
      postsService
        .get(this.$route.params.id)
        .then(response => {
          this.post = response.data;
        })
        .catch(e => {
          alert(e);
        });
    }
  }
};
</script>