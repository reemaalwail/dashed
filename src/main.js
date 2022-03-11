import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
//import firebase from "firebase";
/** start Lab **/
import "./assets/scss/index.scss";
import vuetify from "./plugins/vuetify";
/** end Lab **/

//firebase
/*
const firebaseConfig = {
  apiKey: "AIzaSyCIFGclWI9-QxJMcTqT63YWTYwjjN-5Ucs",
  authDomain: "dashbordhome.firebaseapp.com",
  databaseURL: "https://dashbordhome.firebaseio.com",
  projectId: "dashbordhome",
  storageBucket: "dashbordhome.appspot.com",
  messagingSenderId: "1041889191622",
  appId: "1:1041889191622:web:954a7833dd97e45c9659c7",
  measurementId: "G-WR9732JGWX",
};
firebase.initializeApp(firebaseConfig);
*/
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
