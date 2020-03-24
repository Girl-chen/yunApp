import fetch from './fetch'

// 获取数据
export function GET_DATA(data) {
  let info = {
    method: '',
    data: data
  }
  return fetch.get("/api/query", info).then(res => {
    return Promise.resolve(res.data);
  })
}


// 随机获取数据
export function RAND_GET_DATA(data) {
  let info = {
    method: '',
    data: data
  }
  return fetch.get("/api/randQuery", info).then(res => {
    return Promise.resolve(res.data);
  })
}