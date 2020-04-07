<template>
  <div class="paint-footer">
    <ul>
      <li class="left">
        <i class="iconfont icon-shoucang2"></i>
      </li>
      <li class="time">
        <van-count-down class="vant-time" ref="countDown" millisecond @finish="finish" :auto-start='true' :time="timer" format="mm:ss" />
      </li>
      <li class="right-all" v-show="activeIndex!==questionBank.length-1" @click="showAll">
        <i class="iconfont icon-zonglan"></i>
      </li>
      <li class="right-send" v-show="activeIndex===questionBank.length-1" @click="showAll"> 
        <!-- <i class="send iconfont icon-tijiao"></i> -->
        <span class="text">提交</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import {format} from '../../common/js/common'

export default {
  name: 'yun-drill-footer',
  data() {
    return {
      timer: 30*60*1000
    }
  },
  props: ['activeIndex'],
  computed: {
    ...mapGetters(['questionBank'])
  },
  methods: {
    ...mapMutations({
      setTime: 'SET_TIME'
    }),
    finish(){
      this.$toast({message: '测试时间已结束！'})
    },
    start(){
      this.$refs.countDown.start();
    },

    // 查看全部试题情况，其中包含：未完成、已完成、提交
    showAll(){
      this.$emit('toggleSta')
    }

  }
}
</script>
<style lang="scss" scoped>
$font-size: 1.3rem;
.paint-footer{
  position: relative;
  height: 4rem;
  // box-shadow: 0px 0px 10px rgb(165, 164, 164);
  overflow: hidden;
  background: white;
  z-index: 10;

  ul{
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: $font-size;

    li{
      padding: 1.5rem;

      .vant-time{
        padding: 2rem 1rem;
        // box-shadow: 0px 0px 10px #cccccc;
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
      }
      .iconfont.send{
        color: green;
        box-shadow: 0 0 10px green;
        font-size: 2rem;
      }
    }
    .left{
      width: 30%;
    }
    .time{
      width: 30%;
    }
    .right-all, .right-send{
      width: 30%;

      .text{
        -webkit-text-stroke: 1px white;
        -webkit-text-fill-color: transparent;
        padding: 0.5rem 1rem;
        background: rgb(118, 240, 48);
        border-radius: 0.2rem;
        letter-spacing: 0.2rem;
      }
    }

    .iconfont{
      font-size: $font-size;
    }
  }
}
</style>