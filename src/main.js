import Vue from "vue";
import App from "./App.vue";
import "./assets/css/style.css";
import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
