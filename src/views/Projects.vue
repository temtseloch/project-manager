<template>
  <div>
    <div class="navbar">
      <h1>Project Manager</h1>

      <a class="nav-link" @click="signOut">Sign Out</a>
    </div>
    <div id="projects">
      <project-list></project-list>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import ProjectList from "../components/ProjectList";

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
  components: {
    "project-list": ProjectList,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
