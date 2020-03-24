import router from './index'
import store from '../store/index'
import {user1} from '../common/js/utils'

router.beforeEach((to, from, next) =>{debugger
  if(!store.getters.userinfo){console.log(111223)
    store.commit('SET_USERINFO', user1)
  }
  next()
})