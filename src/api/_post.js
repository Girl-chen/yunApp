import fetch from './fetch'

// 添加试题数据
export function POST_QUESTION_DATA(data) {
  let info = {
    method: '',
    data: data
  }
  return fetch.post("/api/addQuestion", info).then(res => {debugger
    return Promise.resolve(res.data);
  })
}