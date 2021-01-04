<template>
  <div>
    <h2>
      Create New Project
    </h2>
    <form @submit.prevent="createProject">
      <input
        class="form-input"
        type="text"
        name="name"
        v-model="project.name"
        placeholder="Project Name"
      />
      <input
        class="form-input"
        type="text"
        name="details"
        v-model="project.details"
        placeholder="Project Detail"
      />
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import { db } from "../main";
export default {
  name: "CreateProject",
  data() {
    return {
      project: {
        name: "",
        details: "",
      },
    };
  },
  methods: {
    createProject(e) {
      e.preventDefault();
      db.collection("projects")
        .add(this.project)
        .then(() => {
          alert("Project successfully created!");
          this.project.name = "";
          this.project.details = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  margin-right: 10px;
}
</style>
