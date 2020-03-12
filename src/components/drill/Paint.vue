<template>
  <div class="test-info">
    <ul>
      <li>
        <span class="select-num">A</span>
        <div class="select-val">
          运动变化性
        </div>
      </li>
      <li>
        <span class="select-num">A</span>
        <div class="select-val">
          运动变化性
        </div>
      </li>
    </ul>
    <i class="iconfont icon-ai-mark"></i>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'yun-test-info',
  data(){
    return {
      radioChoice: [],      // 单选
      checkChoice: []       // 多选
    }
  },
  computed: {
    ...mapGetters([''])
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
  .test-info { 
    padding: 2rem 1rem;
    box-sizing: border-box;

    ul{
      li{
        text-align: left;
        padding-bottom: 2rem;
        color: #333333;
        font-size: 1.0rem;

        .select-num{
          float: left;
          width: 2rem;
          height: 2rem;
          background: rgb(236, 236, 236);
          border-radius: 50%;
          text-align: center;
          line-height: 2rem;
          font-weight: bold;
        }
        .select-val{
          margin-left: 3rem;
          min-height: 2rem;
          line-height: 2rem;
        }
      }
    }
  }
</style>