import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/framework/sub-modules/store";
import "../public/addServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
