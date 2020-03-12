import * as types from './mutation-types'

export const setUserinfo = ({ commit }, datas) =>{
  commit(types.SET_USERINFO, datas)
  commit(types.SET_TIME, datas)
}