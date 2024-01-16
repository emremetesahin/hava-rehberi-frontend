import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/js/bootstrap.min.js';
import router from './router';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
new Vue({
  el:"#app",
  router,
  template:'<App/>',
  render: h => h(App),
}).$mount('#app')
