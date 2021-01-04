<template>
  <div>
    <h2>
      Create New Project
    </h2>
    <form>
      <input
        class="form-input"
        type="text"
        name="name"
        placeholder="Project Name"
      />
      <input
        class="form-input"
        type="text"
        name="details"
        placeholder="Project Detail"
      />
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateProject",
};
</script>

<style lang="scss" scoped>
.form-input {
  margin-right: 10px;
}
</style>
