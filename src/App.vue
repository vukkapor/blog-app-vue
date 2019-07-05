<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/posts">Posts</router-link>
        </li>
        <li>
          <router-link to="/add">Add a post</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

