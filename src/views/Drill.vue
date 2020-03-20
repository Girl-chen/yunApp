<template>
  <div class="yun-drill">
    <swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionStart='callback'>
      <swiper-slide class="swiper-slid-box" v-for="(item, index) in question" :key="index">
        <div class="drill-header">
          <div class="type">
            <h2>{{item.type}}</h2>
            <p><span class="now">{{index + 1}}</span> / <span class="all">{{question.length}}</span></p>
          </div>
          <van-progress :percentage="((index+1)/question.length)*100" :show-pivot='false' />
          <div class="question">{{item.question}}</div>
        </div>
        <yun-drill-paint class="drill-body" :choiceType='item.choiceType' :option='item.options' />
      </swiper-slide>
    </swiper>
    <yun-drill-footer class="drill-footer" />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import Footer from '@/components/drill/Footer.vue'
import Paint from '@/components/drill/Paint.vue'
import {question} from '@/common/js/utils.js'
export default {
  name: 'yun-drill',
  data(){
    return {
      progressColor: '#638af5',
      question: question,
      swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          autoplay: false
        }
    }
  },
  components:{
    'yun-drill-footer': Footer,
    'yun-drill-paint': Paint
  },
  computed: {
    ...mapGetters(['']),
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted(){
    console.log('this is current swiper instance object', this.swiper.activeIndex)
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    callback(){
      // console.log(this.swiper.activeIndex)
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