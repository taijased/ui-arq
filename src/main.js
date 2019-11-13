import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// Global style css
import './style/font.css'
import './style/index.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false


// Vue.config.ignoredElements = [
//   'a-scene',
//   'a-camera',
//   'a-box',
//   'a-sky',
//   'a-assets',
//   'a-marker',
//   'a-marker-camera'
// ]

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
