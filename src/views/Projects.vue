<template>
  <div>
    <div class="navbar">
      <h1>Project Manager</h1>
      <a class="nav-link" @click="signOut">Sign Out</a>
    </div>

    <div id="projects">
      <CreateProject />
      <ProjectList />
      <EditProject />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import ProjectList from "../components/ProjectList";
import CreateProject from "../components/CreateProject";
import EditProject from "../components/EditProject";

export default {
  components: {
    CreateProject,
    ProjectList,
    EditProject,
  },

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

<style lang="scss" scoped></style>
