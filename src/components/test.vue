<template>
  <div>
    <button @click="testPost">POST</button>
    <button @click="testGet">GET</button>
    <button @click="testDelete">DELETE</button>
    <button @click="testPut">PUT</button>
  </div>
</template>
<script>
import * as POST from '@/api/_post.js'
import * as GET from '@/api/_get.js'
import * as PUT from '@/api/_put.js'
import * as DELETE from '@/api/_delete.js'
import {Toast} from 'vant'
export default {
  name: 'test',
  data(){
    return {
      value: [{value:'234rf'}],
      x: JSON.parse(JSON.stringify([1,234]))
    }
  },
  methods:{
    testPost(){
      let data = {
          table: 'test',                   // 表名     notnull
          item: [                             // title:字段名 value:字段值
              {title: 'name', value: '张三'}
          ]
          // item: {name: '张三',password: '123456'}
      }
      POST.POST_DATA_ALL(data).then(res =>{
        console.log(res)
      })
      .catch(error =>{
        console.log(error)
      })
      
    },


    testGet(){
      let data = {
        table: 'clients',
        orderBy: [                              // false    默认mysql 升序
            { sort: 'asc', target: 'id' }
        ]
      }

      GET.GET_DATA_ALL(data).then(res =>{
        console.log(res)
      })
      .catch(error =>{
        console.log(error)
      })
    },


    testDelete(){
      let data = {
          table: 'test',
          item: [
              {title: 'name', value: '张三'},
              {title: 'id', value: '5'}
          ]
      }

      DELETE.DELETE_DATA_ALL(data).then(res =>{
        console.log(res)
      })
      .catch(error =>{
        console.log(error)
      })
    },


    testPut(){
      let data = {
          table: 'test',
          setData: [
              {title: 'name', value: 'new-name'}
          ],
          condition: [
              {title: 'id', value: '6'},
              {title: 'name', value: '张三'}
          ]
      }

      PUT.PUT_DATA_ALL(data).then(res =>{
        console.log(res)
      })
      .catch(error =>{
        console.log(error)
      })
    }

  }
}
</script>