<template>
  <div>
    <h2>
      Edit Project
    </h2>
    <form @submit.prevent="editProject">
      <input
        class="form-input"
        type="text"
        name="name"
        v-model="project.name"
        placeholder="Project Name"
      />
      <input
        class="form-input detail"
        type="text"
        name="details"
        v-model="project.details"
        placeholder="Project Detail"
      />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  name: "EditProject",
  data() {
    return {
      project: {
        name: "",
        details: "",
      },
    };
  },

  methods: {
    editProject(event) {
      event.preventDefault();
      db.collection("projects")
        .doc(this.project.key)
        .update(this.project)
        .then(() => {
          console.log("Project successfully updated!");
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
.detail {
  width: 300px;
}
</style>
