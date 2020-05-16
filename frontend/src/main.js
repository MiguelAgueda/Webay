import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: (h) => h(App),
  data: {
    authenticated: false,
    loggedInAs: '',
    msg: '',
  },
}).$mount('#app');
