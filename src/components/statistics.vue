<template>
  <div class="statistics">
    <!-- 单选 -->
    <div class="radios">
      <ul>
        <li v-for="(item,index) in 20" :key="index" 
            :class="item.uAnwser?'success':'error'">
          <span>index</span>
        </li>
      </ul>
    </div>
    <!-- 多选 -->
    <div class="checked"></div>
    <!-- 提交 -->
    <div class="submit">
      <van-button plain type="info" @click="submit">提交</van-button>
      <van-button plain type="info" @click="backinto">返回</van-button>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'statistics',
  data(){
    return{
      arr:[]
    }
  },
  computed:{
    ...mapGetters(['questionBank'])
  },
  methods:{
    backinto(){
      this.$emit('toggleSta')
    },
    submit(){
      this.$toast({
        message: '提交中...'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
$width: 20%;
  .statistics{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
    background: white;

    ul{
      text-align: left;

      li{
        display: inline-block;
        background: skyblue;
        margin: 0.2rem;
        height: $width;
        width: $width;
        border-radius: 50%;
        text-align: center;
        line-height: 3rem;
      }
      li.success{
        background: greenyellow;
      }
      li.error{
        background: rgb(236, 236, 236);
      }
    }
  }
</style>