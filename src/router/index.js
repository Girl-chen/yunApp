import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import {user1} from '../common/js/utils'


import Test from '../components/test.vue'
import Home from '../views/Home.vue'
import IconFontList from '../views/IconFontList.vue'
import Drill from '@/views/Drill.vue'
import Issus from '@/views/Issus.vue'
import Sign from '@/views/Sign.vue'
import My from '@/views/My.vue'
import NotFind from '@/components/NotFind.vue'

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
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/notFind',
    name: 'notFind',
    component: NotFind
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
