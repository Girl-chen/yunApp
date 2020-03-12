<template>
  <div class="icon">
    <i :class="'iconfont '+ icons.class"></i>
    <p>{{icons.name}}</p>
  </div>
</template>
<script>
export default {
  name: 'yun-icon',
  props: ['icons']
}
</script>
<style lang="scss">
  div.icon{
    // width: 3rem;
    height: 4rem;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    p{
      text-align: center;
      margin-top: 1rem;
    }
  }
</style>