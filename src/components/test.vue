<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="container">
  <div class="top">
    我是內容
  </div>
  <div class="middle">
    <p>我是內容</p>
    <p>我是內容</p>
  </div>
</div>
</template>

<script>
  export default {
    name: 'carrousel',
    
  }
</script>
<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: red;
}

.top {
  background: blue;
}
.middle {
  background: green;
  flex-grow: 1;
}
</style>