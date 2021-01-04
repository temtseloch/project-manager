import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBrqvtT5mRxpe35dc4ifdCp-t7NZ74zC5I",
  authDomain: "project-manager-dc768.firebaseapp.com",
  projectId: "project-manager-dc768",
  storageBucket: "project-manager-dc768.appspot.com",
  messagingSenderId: "383452975707",
  appId: "1:383452975707:web:b52b1419cc9f601b6ea57e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
