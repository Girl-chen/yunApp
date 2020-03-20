import fetch from './fetch'

// 添加数据
export function POST_DATA_ALL(data) {
  let info = {
    method: '',
    data: data
  }
  return fetch.post("/api/add", info).then(res => {
    return Promise.resolve(res.data);
  })
}