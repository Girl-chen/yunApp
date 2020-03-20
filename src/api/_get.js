import fetch from './fetch'

// 获取数据
export function GET_DATA_ALL(data) {
  let info = {
    method: '',
    data: data
  }
  return fetch.get("/api/query", info).then(res => {
    return Promise.resolve(res.data);
  })
}