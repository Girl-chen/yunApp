import fetch from './fetch'

// 删除数据
export function DELETE_DATA_ALL(data) {
  let info = {
    method: '',
    data: data
  }
  return fetch.delete("/api/delete", info).then(res => {
    return Promise.resolve(res.data);
  })
}