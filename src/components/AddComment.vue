<template>
  <div>
    <form @submit.prevent="addComment(comment)" style="text-align: center">
      <label for="comment-text">Add a new comment:</label>
      <br>
      <textarea name="comment-text" id="comment-text" cols="30" rows="10" v-model="comment.text"></textarea>
      <br>
      <button type="submit">Comment</button>
    </form>
  </div>
</template>

<script>
import { postsService } from "../services/posts";
export default {
  data() {
    return {
      comment: {}
    };
  },
  methods: {
    addComment(comment) {
      postsService
        .addComment(comment, this.$route.params.id)
        .then(() => {
          this.$router.push("/post/" + this.$route.params.id);
        })
        .catch(e => {
          alert(e);
        });
    }
  }
};
</script>
