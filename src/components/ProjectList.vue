<template>
  <div>
    <h2>Projects</h2>
    <div>
      <project-item></project-item>
    </div>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem";

export default {
  name: "ProjectLsit",
  components: {
    "project-item": ProjectItem,
  },
};
</script>

<style lang="scss" scoped></style>
