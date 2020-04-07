<template>
  <div class="test-info">
    <ul>
      <li v-for="(item, index) in option" :key="index" :class="{active:radioChoice==item.sort || checkChoice.includes(item.sort)}" @click="choseThis(item)">
        <span class="select-num">{{item.sort}}</span>
        <div class="select-val">{{item.value}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'yun-test-info',
  props: ['option','choiceType','id'],
  data(){
    return {
      radioChoice: '',      // 单选
      checkChoice: [],      // 多选
    }
  },
  computed: {
    ...mapGetters(['questionBank'])
  },
  methods: {
    ...mapMutations({
      setWordQuestion: 'SET_QUESTION_WORK'
    }),
    // 选择答案
    choseThis(obj){
      let data = {
        id: this.id
      }
      // console.log(event.target.parentNode.classList.add('active'))
      // 单选
      if(this.choiceType === 1) {
        this.radioChoice = obj.sort
        data['uAnswer'] = this.radioChoice
      }
      // 多选
      if(this.choiceType === 2){
        if(!this.checkChoice.includes(obj.sort)){
          this.checkChoice.push(obj.sort)
        }else{
          let checkedIndex = this.checkChoice.findIndex((option)=>{
            return option===obj.sort
          })
          this.checkChoice.splice(checkedIndex, 1)
        }
        let boxStr = this.checkChoice.join(' ')
        data['uAnswer'] = boxStr
      }
      
      this.setWordQuestion(data)
      this.$forceUpdate()
    }
  }
}
</script>
<style lang="scss" scoped>
  .test-info { 
    padding: 2rem 1rem;
    box-sizing: border-box;
    background: white;
    margin-top: 0.5rem;

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
      li.active{
        .select-num{
          background: rgb(60, 184, 70);
          color: white;
        }
      }
    }
  }
</style>