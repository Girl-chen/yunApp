<template>
  <div class="issus">
    <!-- 题目 -->
    <div class="item question">
      <textarea placeholder="请输入试题" v-model="question"></textarea>
    </div>
    <!-- 选项 -->
    <div class="item options">
      <div class="newBtn" @click="addOptions">
        <input type="button" placeholder="请输入 (答案) " value="添加选项">
        <i class="iconfont icon-tianjia"></i>
      </div>
      
      <van-checkbox-group v-model="result">
        <div class="opiton-item" v-for="(item, index) in options" :key="index" >
          <input type="text" :class="(anwser===item.sort&&checkType==='单选')?'success':''" v-model="item.value" @input="updateOption" placeholder="请输入 (选项) " />
          <i class="iconfont icon-shanchu" @click="deleteThis(index)" v-show="checkType==='单选'"></i>
          <van-checkbox class="checkBox" :name="'checked-'+index" checked-color='#7ad151' v-show="checkType==='多选'"></van-checkbox>
        </div>
      </van-checkbox-group>
    </div>
    <!-- 答案 -->
    <div class="item anwser">
      <input id="anwser" type="button" :value="anwser?anwser:'请选择答案 (单选)'" v-show="checkType=='单选'">
      <input id="boxAnwser" type="button" :value="boxAnwser?boxAnwser:'请选择答案 (多选)'" v-show="checkType=='多选'">

      <p id="choiceType" ref="choiceType">{{checkType}}</p>
      <i class="iconfont icon-xia" @click="cdAnwser"></i>
    </div>
    <!-- 类型(单选、多选、其他) -->
    <div class="item choiceType"></div>
    <!-- 专业 -->
    <div class="item profession"></div>
    <!-- 提交 -->
    <div class="item submit">
      <input type="button" class="btn-reset" @click="reset" value="重置">
      <input type="button" class="btn-submit" @click="submit" value="提交">
    </div>
    
  </div>
</template>
<script>
import MobileSelect from 'mobile-select'
import { mapGetters } from 'vuex'
import * as PUT from '../api/_put'
import * as POST from '../api/_post'
export default {
  name: 'yun-issus',
  data() {
    return {
      question: '',
      value: '',
      checkType: '单选',
      options: [{id: 1, value: '', sort: 'A'}],
      anwser: '',
      boxAnwser: '',
      result: []
    }
  },
  computed: {
    ...mapGetters(['userinfo'])
  },
  watch:{
    result: function(newValue, oldValue){
      this.boxAnwser = ''
      newValue.forEach((obj,index) =>{
        this.boxAnwser += this.alphabat(Number.parseInt(obj.split('-')[1])) + ' '
      })
    }
  },
  mounted(){
    let that = this
    this.selectQType = new MobileSelect({
      trigger: '#choiceType',
      title: '选择题型',
      wheels: [
        {
          data:[
            {id: 'c1', value: '单选'},
            {id: 'c2', value: '多选'}
          ]
        }
      ],
      keyMap:{
        id: 'id',
        value: 'value'
      },
      position: [0,0],
      callback: function(indexArr, data){
        that.checkType = data[0].value
        if(data[0].value === '多选'){
          that.$toast({
            message: '请选择答案'
          })
        }
      }
    }),

    this.selectAnwser = new MobileSelect({
      trigger: '#anwser',
      title: '选择答案(单选)',
      wheels: [
        {
          data: that.options
        }
      ],
      position: [0,0],
      keyMap:{
        id: 'id',
        value: 'value'
      },
      callback: function(indexArr, data){
        console.log(data)
        that.anwser = data[0].sort
      }
    })

    console.log(this.userinfo)
  },
  methods:{
    // 加载多选 error
    // {data:[{id:11,value:'123',sort:'A'}]}}
    setBoxAnwser(){
      this.boxOptions = []
      let that = this
      this.options.forEach( obj =>{
        that.boxOptions.push({data:[{id:0,value:'',sort:''},{id:obj.id, value:`${obj.value}`, sort:`${obj.sort}`}]})
      })
      // this.selectMoreAnwser.updateWheels(this.boxOptions)
      
    },
    // 点击下拉图标转到点击按钮
    cdAnwser(){
      this.$refs.choiceType.click()
    },
    // 添加选项
    addOptions(){
      this.options.push({id: (this.options.length+1), value: '', sort: this.alphabat(this.options.length)})
      this.updateOption()
    },
    // 删除此选项
    deleteThis(index){
      let that = this
      this.$dialog.confirm({
        title: '提示',
        message: '是否删除此选项？'
      }).then(() => {
        this.options.splice(index, 1)
        // 更新选列号 ABCD...
        this.options.forEach((obj,index) =>{
          obj.sort = this.alphabat(index)
        })
        this.updateOption()
      }).catch(() => {
        this.$toast({
          message: '出错了！'
        })
      })
    },
    // 生成序号 ABCD...
    alphabat(index){
      return String.fromCharCode(65+index);
    },
    // 更新选项(mobile-select)
    updateOption(){
      this.selectAnwser.updateWheel(0, this.options)
    },
    // 提交
    submit(){
      // 验证数据
      if(!this.question.trim()){
        this.$toast({message:'题目不能为空！'})
        return ;
      }else if(this.options.length<2){
        this.$toast({message:'答案至少需要两项'})
        return ;
      }else{
        let hasAnwser = true
        this.options.forEach(obj =>{
          if(!obj.value.trim()){
            hasAnwser = false
          }
        })
        if(!hasAnwser){
          this.$toast({message:'选项内容不能为空'})
          return ;
        }

        if(this.checkType === '单选'){
          if(!this.anwser.trim()){
            this.$toast({message:'请选择答案'})
            return ;
          }
          
        }else{
          if(this.boxAnwser.trim().split(' ').length < 2){
            this.$toast({message:'多选题至少需要两个正确答案'})
            return ;
          }
        }
      }

      let data = {
        title: this.question,
        options: JSON.stringify(this.options),
        userID: this.userinfo.id,
        type: '马克思基本原理概论'
      }
      if(this.checkType === '单选'){
        data.anwser = this.anwser
        data.qtype = 1
      }else if(this.checkType === '多选'){
        data.anwser = this.boxAnwser
        data.qtype = 2
      }
      POST.POST_QUESTION_DATA(data).then(res =>{
        console.log(res)
      })
    },
    // 重置
    reset(){
      this.question = ''
      // this.checkType = '单选'
      // this.selectType.locatePosition(0,0)
      this.options = [{id:1, value:'',sort:'A'}]
      this.anwser = ''
      this.boxAnwser = ''
      this.result = []
    }
  }
}
</script>
<style lang="scss" scoped>

.issus{
  height: 100%;
  background: white;

  .item{
    padding: 0.2rem 2rem;
    box-sizing: border-box;
    text-align: left;

    input{
      width: 100%;
      height: 3rem;
      background: rgb(245, 245, 245);
      outline: none;
      border: none;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px #cccccc;
      resize: none;
      box-sizing: border-box;
      color: #333333;
      margin-top: 0.5rem;
      text-indent: 1rem;
    }
  }
  .question{
    .title{
      font-size: 1.1rem;
    }
    textarea{
      width: 100%;
      height: 5rem;
      background: rgb(245, 245, 245);
      outline: none;
      border: none;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px #cccccc;
      resize: none;
      padding: 1rem;
      box-sizing: border-box;
      color: #333333;
      margin-top: 0.5rem;
    }
  }
  .options{
    margin-bottom: 2rem;
    >input{
      border: none;
      width: 100%;
      padding: 1rem 0;
      background: rgb(245, 245, 245);
    }
    .newBtn{
      display: flex;
      align-items: center;
      position: relative;
      width: 50%;
      margin: 1rem 0;
      >input{
        display: inline-block;
        width: 100%;
        top: auto;
        text-align: left;
        background: rgba(140, 214, 243, 0.432);
        font-weight: 500;
        letter-spacing: 0.3rem;
        padding: 0;
        color: #666666;
        font-weight: bold;
      }
      >.iconfont{
        position: absolute;
        right: 1rem;
        margin-top: 0.2rem;
        color: #666666;
      }
    }

    .opiton-item{
      display: flex;
      align-items: center;
      >input{
        flex-grow: 1;
      }
      >.iconfont{
        text-align: center;
        width: 2rem;
        padding: 1rem;
      }
      .success{
        box-shadow: 0 0 10px #a7f781;
        background: #cbf7b7;
        // background: #7ad151;
        color: #666666;
      }
      .checkBox{
        width: 2rem;
        padding: 1rem;
      }
    }
  }
  .anwser{
    display: flex;
    align-items: center;
    position: relative;

    .iconfont{
      position: absolute;
      right: 2.5rem;
      top: auto;
      margin-top: 0.3rem;

    }
    input{
      width: 60%;
      text-align: left;
    }
    #choiceType{
      // width: 40%;
      margin-left: 0.5rem;
      flex-grow: 1;
      height: 3rem;
      line-height: 3rem;
      padding: 0 2rem 0 0.5rem;
      text-align: center;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px #cccccc;
      background: rgb(245, 245, 245);
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 30%;
    }
  }
  .submit{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4rem;
    font-size: 1.3rem;
    padding: 0;
    display: flex;
    .btn-reset{
      height: 100%;
      width: 50%;
      background: rgb(223, 223, 223);
      border-radius: none;
      box-shadow: none;
      color: rgb(122, 122, 122);
      letter-spacing: 0.3rem;
    }
    .btn-submit{
      height: 100%;
      width: 50%;
      border-radius: none;
      box-shadow: none;
      background: rgb(187, 187, 187);
      color: white;
      letter-spacing: 0.3rem;
    }
  }
}
</style>