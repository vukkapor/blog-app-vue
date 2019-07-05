<template>
  <div style="width:100%; margin-left: auto;
    margin-right: auto; padding-left: 20px">
    <form @submit.prevent="AddNewPost(newPost)">
      <div>
        <label for="title">Title</label>
        <br>
        <input
          type="text"
          name="title"
          id="title"
          v-model="newPost.title"
          style="width:60%"
          required
          minlength="2"
        >
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
          required
          maxlength="300"
        ></textarea>
      </div>
      <div>
        <button type="submit">Add a new post</button>
      </div>
    </form>
    <button @click="resetForm()">Reset form</button>
    <button v-if="editable" @click="editPost(newPost)">Edit post</button>
  </div>
</template>

<script>
import { postsService } from "../services/posts";
export default {
  data() {
    return {
      newPost: {},
      editable: false
    };
  },

  methods: {
    AddNewPost(newPost) {
      postsService
        .add(newPost)
        .then(() => {
          this.$router.push("/posts");
        })
        .catch(e => {
          alert(e);
        });
    },

    resetForm() {
      this.newPost = {};
    },

    editPost(newPost) {
      postsService
        .edit(newPost.id, newPost)
        .then(() => {
          return this.$router.push("/posts");
        })
        .catch(e => {
          alert(e);
        });
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.editable = true;
      postsService
        .get(this.$route.params.id)
        .then(response => {
          this.newPost = response.data;
        })
        .catch(e => {
          alert(e);
        });
    }
  }
};
</script>
