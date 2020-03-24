<template>
  <div class="home">
    <router-link :to="{path:'/drill'}" tag="button">试题练习</router-link>
    <router-link :to="{path:'/issus'}" tag="button">发布试题</router-link>
    <!-- 顶部搜索栏 -->
    <!-- 学科列表 -->
    <!-- 底部 tabbar -->
    <div class="test-list">
      <!-- <ul>
        <li>
          <router-link to='/drill' tag='div'>
            <i class="iconfont icon-yixuekepu"></i>
            <p>马克思基本原理概论</p>
          </router-link>
        </li>
        <li>
          <router-link to='/drill' tag='div'>
            <i class="iconfont icon-yixuekepu"></i>
            <p>社会心理学</p>
          </router-link>
        </li>
        <li>
          <router-link to='/drill' tag='div'>
            <i class="iconfont icon-yixuekepu"></i>
            <p>测试</p>
          </router-link>
        </li>
      </ul> -->

      <van-row gutter="10">
        <van-col class="test-list" span="8">
          <router-link to='/drill' tag='div'>
            <i class="iconfont icon-yixuekepu"></i>
            <p>马克思基本原理概论</p>
          </router-link>
        </van-col>
        <van-col class="test-list" span="8">
          <router-link to='/issus' tag='div'>
            <i class="iconfont icon-yixuekepu"></i>
            <p>新增</p>
          </router-link>
        </van-col>
        <van-col class="test-list" span="8">
          <router-link to='/drill' tag='div'>
            <i class="iconfont icon-yixuekepu"></i>
            <p>测试</p>
          </router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
.home{
  background: rgb(243, 245, 248);
  height: 100%;
  
  .test-list{
    padding: 1rem;

    .test-list{
      // float: left;
      // width: 30%;
      height: 8.5rem;
      background: white;
      // padding-top: 1rem;
      // margin-right: 3.3%;

      .iconfont{
        font-size: 3rem;
      }
      p{
        width: 80%;
        text-align: center;
        margin: 1rem auto;
      }
    }
  }
}
  
</style>
