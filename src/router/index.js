import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import {user1} from '../common/js/utils'


import Test from '../components/test.vue'
import Home from '../views/Home.vue'
import Paint from '../components/drill/Paint.vue'
import IconFontList from '../views/IconFontList.vue'
import PaintFooter from '../components/drill/Footer.vue'
import Drill from '@/views/Drill.vue'
import Issus from '@/views/Issus.vue'
import Sign from '@/views/Sign.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/iconList',
    name: 'iconList',
    component: IconFontList
  },
  {
    path: '/drill',
    name: 'drill',
    component: Drill
  },
  {
    path: '/issus',
    name: 'issus',
    component: Issus
  },
  {
    path: '/sign',
    name: 'sign',
    component: Sign
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  if(!store.getters.userinfo){
    store.commit('SET_USERINFO', user1)
  }
  next()
})


export default router
