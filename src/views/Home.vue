<template>
  <div class="home">
    <router-link :to="{path:'/drill'}" tag="button">试题练习</router-link>
    <router-link :to="{path:'/issus'}" tag="button">发布试题</router-link>
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
