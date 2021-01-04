<template>
  <div>
    <h2>Projects</h2>
    <div>
      <ProjectItem />
    </div>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem";

export default {
  name: "ProjectList",

  components: {
    ProjectItem,
  },
};
</script>

<style lang="scss" scoped></style>
