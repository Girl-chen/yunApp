<template>
  <div class="paint-footer">
    <ul>
      <li>
        <i class="iconfont icon-shoucang2"></i>
      </li>
      <li>
        <van-count-down class="vant-time" ref="countDown" millisecond @finish="finish" :auto-start='true' :time="timer" format="mm:ss" />
      </li>
      <li>
        <i class="iconfont icon-zonglan"></i>
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
  created(){
    // var t = new Date()
    // console.log(format(t, 'yyyy-MM-dd hh:mm'))
    // this.setTime(new Date().getTime())
    
  },
  computed: {
    ...mapGetters(['time'])
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
    }

  }
}
</script>
<style lang="scss" scoped>
$font-size: 1.3rem;
.paint-footer{
  height: 4rem;
  // box-shadow: 0px 0px 10px rgb(165, 164, 164);
  overflow: hidden;
  background: white;

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
    }

    .iconfont{
      font-size: $font-size;
    }
  }
}
</style>