import Vue from "vue";
import App from "@app/ui/app/app.vue";
import store from '@shared/store';
import "@app/styles/default.scss";

new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
});
