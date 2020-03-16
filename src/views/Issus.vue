<template>
  <div class="issus">
    <!-- 题目 -->
    <div class="item question">
      <textarea placeholder="请输入试题"></textarea>
    </div>
    <!-- 选项 -->
    <div class="item options">
      <div class="newBtn" @click="addOptions">
        <input type="button" placeholder="请输入 (答案) " value="添加选项">
        <i class="iconfont icon-tianjia"></i>
      </div>
      
      <div class="opiton-item" v-for="(item, index) in options" :key="index" >
        <input type="text" v-model="item.value" placeholder="请输入 (选项) " />
        <i class="iconfont icon-shanchu" @click="deleteThis(index)"></i>
      </div>
      
    </div>
    <!-- 答案 -->
    <div class="item anwser">
      <input id="anwser" type="button" placeholder="请输入 (答案) " value="">

      <p id="choiceType" ref="choiceType"></p>
      <i class="iconfont icon-xia" @click="cdAnwser"></i>
    </div>
    <!-- 类型(单选、多选、其他) -->
    <div class="item choiceType">
      
    </div>
    <!-- 专业 -->
    <div class="item profession"></div>
    <!-- 提交 -->
    <div class="item submit">
      <input type="button" class="btn-reset" value="重置">
      <input type="button" class="btn-submit" value="提交">
    </div>
    
  </div>
</template>
<script>
import MobileSelect from 'mobile-select'
export default {
  name: 'yun-issus',
  data() {
    return {
      value: '',
      mobileSelect: null,
      checkType: '单选||多选',
      options: [{id: 1, value: '123'},{id: 2, value: 'abc'}]
    }
  },
  computed:{

  },
  mounted(){
    let that = this
    this.selectType = new MobileSelect({
      trigger: '#choiceType',
      title: '选择类型',
      wheels: [
        {
          data:[
            {id: '12', value: '张三'},
            {id: '13', value: '李四李四李四李四李四李四李四李四'}
          ]
        }
      ],
      position: [0,0],
      callback: function(indexArr, data){
        console.log(data)
      }
    }),

    this.selectAnwser = new MobileSelect({
      trigger: '#anwser',
      title: '选择答案',
      wheels: [
        {
          data: that.options
        }
      ],
      position: [0,0],
      callback: function(indexArr, data){
        console.log(that.options)
      }
    })
  },
  methods:{
    // 点击下拉图标转到点击按钮
    cdAnwser(){
      this.$refs.choiceType.click()
    },
    // 添加选项
    addOptions(){
      this.options.push({id: (this.options.length+1), value: ''})
    },
    // 删除此选项
    deleteThis(index){
      let that = this
      this.$dialog.confirm({
        title: '提示',
        message: '是否删除此选项？'
      }).then(() => {console.log(this.alphabat(3))
        that.options.splice(index, 1)
      }).catch(() => {
        // this.$toast({
        //   message: '删除出错！'
        // })
        console.log('出错了！')
      })
    },
    // 生成序号 ABCD...
    alphabat(index){
      return String.fromCharCode(65+index);
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