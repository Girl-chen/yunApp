import fetch from './fetch'

// 获修改数据
export function PUT_DATA(data) {
  let info = {
    method: '',
    data: data
  }
  return fetch.put("/api/put", info).then(res => {
    return Promise.resolve(res.data);
  })
}