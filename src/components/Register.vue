<template>
  <div id="register">
    <form class="form" @submit.prevent="pressed">
      <h2>Register</h2>
      <input
        class="form-input"
        type="email"
        v-model="email"
        placeholder="Email"
      />
      <input
        class="form-input"
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <button type="submit">Register</button>
      <div v-if="error" class="error">{{ error.message }}</div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },

  methods: {
    async pressed() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "Projects" });
      } catch (err) {
        console.log(err);
        this.error = err;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
