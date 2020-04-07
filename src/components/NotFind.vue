<template>
  <div class="yun-no-data">
    <!-- <img src="" alt=""> -->
    <div class="box">
      <i class="iconfont icon-zhaobudaojieguo"></i>
      <p class="txt">{{tips}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'yun-no-data',
  data() {
    return {
      tips: '暂无数据'
    }
  }
}
</script>
<style lang="scss" scoped>
.yun-no-data {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 11;

  .box {
    text-align: center;

    .iconfont {
      font-size: 6rem;
    }
    .txt {
      margin-top: 10px;
    }
  }
}
</style>