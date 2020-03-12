import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './states'
import * as actions from './actions'
import * as getters from './getters'
import {mutations} from './mutations'
import createLogger from 'vuex/dist/logger'           // 展现数据变动
import createPersistedstate from 'vuex-persistedstate'    // 数据持久化

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: debug ? [
    createLogger(),
    createPersistedstate({
      storage: window.sessionStorage,
    })
  ]: [
    createPersistedstate({
      storage: window.sessionStorage,
    })
  ]
  
})
