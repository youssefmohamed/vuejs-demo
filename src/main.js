import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./scss/main.scss";
import "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/css/all.css";
import "@/filters.js";
import "@/directives.js";
import Modal from "@burhanahmeed/vue-modal-2";


Vue.use(Modal);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h){
    return h(App);
  },
}).$mount("#app");
