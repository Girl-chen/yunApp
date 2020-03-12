<template>
  <div class="icon-list">
    <ul>
      <li v-for="(item, index) in iconList" :key='index'>
        <yun-icon :icons='item' />
        <!-- {{item}} -->
      </li>
    </ul>
    <!-- {{JSON.stringify(iconList)}} -->
  </div>
</template>
<script>
import Icon from '@/components/icon.vue'
import iconAll from '../common/js/iconfont.js'
export default {
  name: 'yun-iconfont-list',
  data() {
    return {
      title: '图标列表',
      iconList: iconAll
    }
  },
  computed: {

  },
  components:{
    'yun-icon': Icon
  }
}
</script>
<style lang="scss" scoped>
.icon-list{
  padding: 2rem 1rem;
  box-sizing: border-box;
  max-width: 100%;

  ul {
    display: flex;
    flex: 1;
    white-space: normal;
    min-width: 0;
    flex-wrap: wrap;
    justify-content: space-between;

    li{
      padding: 1rem 1rem;
    }
  }
}
  
</style>