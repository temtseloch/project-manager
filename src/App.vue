<template>
  <div id="app">
    <div id="nav">
      <Projects v-if="loggedIn" />
      <LoginRegister v-else />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import LoginRegister from "./views/LoginRegister";
import Projects from "./views/Projects";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  components: {
    LoginRegister,
    Projects,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}

body {
  background: #a9d6e5;
}

h1,
h2,
h3 {
  font-weight: 400;
  letter-spacing: 1px;
  opacity: 0.8;
}

h2,
h3 {
  margin-bottom: 15px;
}

p {
  opacity: 0.8;
  letter-spacing: 1px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: #48cae4;

  .nav-links {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-link {
    text-decoration: none;
    color: black;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 500;
    transition: all 0.3s ease;
    opacity: 0.8;

    &.router-link-exact-active {
      color: #f1faee;
    }
  }
  .nav-link:hover {
    color: #f1faee;
  }
}

#login,
#register {
  display: flex;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 50px 0;
}

.form-input {
  margin-bottom: 15px;
  padding: 5px 10px;
  border-radius: 10px;
}

button {
  width: 100px;
  padding: 5px 5px;
  border-radius: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #f1faee;
}

.error {
  text-align: center;
  color: red;
}

#projects {
  text-align: center;
  margin: 50px 0;
}
</style>
