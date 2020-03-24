import axios from 'axios'
import {Toast} from 'vant'
import store from '../store/index'

const api = process.env.NODE_ENV === "production" ? "" : "/api"
let loadCount = 0
let loading;

axios.interceptors.request.use(config =>{
  loadCount++;
  if(config.timeout > 15000) {
    loading = Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    })
    return config;
  }},
  error => {
    loadCount--;
    if(!loadCount) {
      loading.clear()
    }
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(response =>{
  loadCount--;
  if(!loadCount) {
    loading.clear()
  }
  return response;
},
  error =>{
    loadCount--;
    if(error.response.status === 504 || error.response.status === 404){
      Toast.loading({
        message: '服务器异常',
        forbidClick: true
      })
    }else if (error.response.status === 403) {
      Toast.loading({
        message: "出错了"
      })
    }else {
      Toast.loading({
        message: "未知"
      })
    }
    if(!loadCount) {
      loading.clear()
    }
    return Promise.resolve(error.response)
  })

  export default {
    post(url, data = null, time = false) {
      return axios({
        url: url,
        method: 'post',
        data: data,
        timeout: time ? 15000 : 20000
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: "Bearer " + store.state.token
        // }
      })
        .then(res => {
          return Promise.resolve(res);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    },

    get(url, data = null, time = false){
      return axios.get(url, {
        params: data,
        timeout: time ? 15000 : 20000
      },)
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(error => {
        return Promise.reject(error);
      });
    },

    delete(url, data = null, time = false){
      return axios.delete(url, {
        params: data,
        timeout: time ? 15000 : 20000
      },)
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(error => {
        return Promise.reject(error);
      });
    },

    put(url, data = null, time = false){
      return axios({
        url: url,
        method: 'put',
        data: data,
        timeout: time ? 15000 : 20000
      },)
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(error => {
        return Promise.reject(error);
      });
    }
  };