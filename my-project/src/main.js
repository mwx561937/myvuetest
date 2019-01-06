import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import login from './components/user'

Vue.use(ElementUI);
Vue.use(login);

new Vue({
  el: '#app',
  render: h => h(App)
})
