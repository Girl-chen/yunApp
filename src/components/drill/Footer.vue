<template>
  <div class="paint-footer">
    <ul>
      <li>
        <i class="iconfont icon-shoucang2"></i>
      </li>
      <li>
        <span class="time">{{time}}</span>
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
      newTime: null
    }
  },
  created(){
    // var t = new Date()
    // console.log(format(t, 'yyyy-MM-dd hh:mm'))
    this.setTime(new Date().getTime())
    
    
  },
  computed: {
    ...mapGetters(['time'])
  },
  methods: {
    ...mapMutations({
      setTime: 'SET_TIME'
    }),

  }
}
</script>