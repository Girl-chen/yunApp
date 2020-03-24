export const question = [
  {
    question: '物质的唯一特性是()',
    options: [
      {title: 'A', value: '运动变化性'},
      {title: 'B', value: '客观存在性'},
      {title: 'C', value: '可知性'},
      {title: 'D', value: '广延性'},
    ], 
    anwser: 'B',
    type: '选择题',
    choiceType: 1,
    id: '1',
  },
  {
    question: '在马克思主义理论体系中，科学社会主义是其()',
    options: [
      {title: 'A', value: '理论基础'},
      {title: 'B', value: '核心内容'},
      {title: 'C', value: '指导原则'},
      {title: 'D', value: '前提条件'},
    ], 
    anwser: 'B',
    type: '选择题',
    choiceType: 1,      // 选择题类型： 1：单选   2：多选
    id: '2'
  },
  {
    question: '心理学之所以脱离哲学成为一门独立的科学，它的方法符合()',
    options: [
      {title: 'A', value: '系统化标准'},
      {title: 'B', value: '理论性标准'},
      {title: 'C', value: '客观性标准'},
      {title: 'D', value: '准确性标准'},
      {title: 'E', value: '可检测性标准'}
    ], 
    anwser: ['C','D','E'],
    type: '选择题',
    choiceType: 2,      // 选择题类型： 1：单选   2：多选
    id: '3'
  },
  {
    question: '在19世纪三大工人运动中，集中反映工人政治要求的是()',
    options: [
      {title: 'A', value: '法国里昂工人起义'},
      {title: 'B', value: '英国宪章运动'},
      {title: 'C', value: '芝加哥工人起义'},
      {title: 'D', value: '德国西里西亚纺织工人起义'}
    ], 
    anwser: ['B'],
    type: '单选题',
    choiceType: 1,      // 选择题类型： 1：单选   2：多选
    id: '4'
  }
]

export const user1 = {
  id: 1,
  name: 'canmen',
  postNum: 0,
  email: '2826315773@qq.com',
  reprint: 0
}