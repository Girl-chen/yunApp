import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'   // swiper
import axios from 'axios'
// import MobileSelect from 'mobile-select'            // 底部选择组件
import Vant from 'vant';                          // vant
import 'vant/lib/index.css';
import 'swiper/dist/css/swiper.css'
import './registerServiceWorker'                  // PWD
// import '@/common/font/iconfont.css'
import './common/style/public.scss'               // 公共样式

Vue.use(VueAwesomeSwiper)
Vue.use(Vant)
// Vue.use(MobileSelect)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
