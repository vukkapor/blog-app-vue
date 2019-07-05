<template>
  <div style="width:100%; margin-left: auto;
    margin-right: auto; padding-left: 20px">
    <form @submit.prevent="AddNewPost(newPost)">
      <div>
        <label for="title">Title</label>
        <br>
        <input type="text" name="title" id="title" v-model="newPost.title" style="width:60%">
      </div>
      <div>
        <label for="text">Text</label>
        <br>
        <textarea
          type="text"
          name="text"
          id="text"
          v-model="newPost.text"
          style="width:60%; height: 400px"
        ></textarea>
      </div>
      <div>
        <button type="submit">Add a new post</button>
      </div>
    </form>
    <button @click="resetForm()">Reset form</button>
  </div>
</template>

<script>
import { postsService } from "../services/posts";
export default {
  data() {
    return {
      newPost: {}
    };
  },

  methods: {
    AddNewPost(newPost) {
      postsService
        .add(newPost)
        .then(() => {
          this.newPost = {};
          this.$router.push("/posts");
        })
        .catch(e => {
          alert(e);
        });
    },

    resetForm() {
      this.newPost = {};
    }
  }
};
</script>
