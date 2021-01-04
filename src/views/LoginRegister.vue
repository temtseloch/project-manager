<template>
  <div>
    <div class="navbar">
      <h1>Project Manager</h1>

      <div class="nav-links">
        <router-link class="nav-link" to="/login">Login</router-link>
        <router-link class="nav-link" to="/register">Register</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "LoginRegister",
};
</script>

<style lang="scss" scoped></style>
