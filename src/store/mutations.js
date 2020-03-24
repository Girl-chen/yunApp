import * as types from './mutation-types'

export const mutations = {
  [types.SET_USERINFO](state, userinfo) {
    state.userinfo = userinfo
  },
  [types.SET_TIME](state, time) {
    state.time = time
  },
  [types.SET_QUESTION_BANK](state, data){
    state.questionBank = data
  }
}