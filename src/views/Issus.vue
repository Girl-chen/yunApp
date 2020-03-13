<template>
  <div class="issus">
    <!-- 题目 -->
    <div class="item question">
      <textarea placeholder="请输入试题"></textarea>
    </div>
    <!-- 选项 -->
    <div class="item options">
      <input type="text" placeholder="请输入 (选项一) ">
      <input type="text" placeholder="请输入 (选项二) ">
      <input type="text" placeholder="请输入 (选项三) ">
      <input type="text" placeholder="请输入 (选项四) ">
    </div>
    <!-- 答案 -->
    <div class="item anwser">
      <input type="text" placeholder="请输入 (答案) ">
    </div>
    <!-- 类型(单选、多选、其他) -->
    <div class="item choiceType">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <!-- 专业 -->
    <div class="item profession"></div>
    <!-- 提交 -->
    <button>提交</button>
  </div>
</template>
<script>
export default {
  name: 'yun-issus',
  data() {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      
    }
  },
  computed:{

  },
  methods:{

  }
}
</script>
<style lang="scss">
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
    input{
      border: none;
      width: 100%;
      padding: 1rem 0;
      background: rgb(245, 245, 245);

    }
  }
}
</style>