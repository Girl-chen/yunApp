<template>
  <div class="yun-drill">
    <swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionStart='callback'>
      <swiper-slide class="swiper-slid-box" v-for="(item, index) in questionBank" :key="index">
        <div class="drill-header">
          <div class="type">
            <h2>{{item.qtype==1?'单选题':'多选题'}}</h2>
            <p><span class="now">{{index + 1}}</span> / <span class="all">{{questionBank.length}}</span></p>
          </div>
          <van-progress :percentage="((index+1)/questionBank.length)*100" :show-pivot='false' />
          <div class="question">{{item.title}}</div>
        </div>
        <yun-drill-paint class="drill-body" :choiceType="item.qtype" :option='JSON.parse(item.options)' />
      </swiper-slide>
    </swiper>
    <yun-drill-footer class="drill-footer" :activeIndex="activeIndex" />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import Footer from '@/components/drill/Footer.vue'
import Paint from '@/components/drill/Paint.vue'
import {question} from '@/common/js/utils.js'
import * as GET from '../api/_get'
export default {
  name: 'yun-drill',
  data(){
    return {
      progressColor: '#638af5',
      question: question,
      activeIndex: 0,
      swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          autoplay: false
        }
    }
  },
  created(){
    let data = {
      limit: 10,
      type: '马克思基本原理概论'
    }
    GET.RAND_GET_DATA(data).then(res =>{
      res.data.forEach((item,index) =>{
        let arr = JSON.parse(item.options)
        console.log(arr)
        // item.options = arr
      })
      if(res.code === 0) this.setQuestionBank(res.data)
      else console.log('获取数据错误！')
    })
    
  },
  components:{
    'yun-drill-footer': Footer,
    'yun-drill-paint': Paint
  },
  computed: {
    ...mapGetters(['userinfo','questionBank']),
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted(){
    console.log('this is current swiper instance object', this.swiper.activeIndex)
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    ...mapMutations({
      setQuestionBank: 'SET_QUESTION_BANK'
    }),
    callback(){
      this.activeIndex = this.swiper.activeIndex
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-container{
  height: calc(100% - 4rem);
}
.yun-drill{
  height: 100%;
  background: rgb(245, 245, 245);

  .swiper-slid-box{
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .drill-header{
    padding: 1rem;
    background: white;

    .type{
      height: 3rem;
      display: flex;
      justify-content: left;
      align-items: baseline;

      h2{
        color: rgb(53, 153, 235);
        margin-right: 1rem;
        font-size: 1.3rem;
      }
      p{
        color: #999999;
        .now{
          color: #333333;
          font-size: 1.1rem;
        }
      }
    }
    .question{
      margin-top: 1rem;
      text-align: left;
    }
  }
  .drill-body{
    margin-bottom: 0.5rem;
    flex-grow: 1;
  }
  .drill-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
  
</style>