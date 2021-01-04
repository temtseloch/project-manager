<template>
  <div>
    <div class="navbar">
      <h1>Project Manager</h1>

      <a class="nav-link" @click="signOut">Sign Out</a>
    </div>
    <div id="projects">
      <h2>Projects</h2>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "Login" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
