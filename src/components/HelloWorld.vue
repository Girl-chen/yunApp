<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{userinfo}}</h2>
    <button class="setUserinfo" @click="setDatas">setting</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState, mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['userinfo'])
  },
  methods: {
    ...mapMutations({
      setUserinfo: 'SET_USERINFO'
    }),

    setDatas(){
      let data = {
        name: '张三',
        age: 20
      }
      this.setUserinfo(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
