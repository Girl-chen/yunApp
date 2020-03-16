<template>
  <div>
    {{value}}
    <button @click="test">show</button>
  </div>
</template>
<script>
export default {
  name: 'test',
  data(){
    return {
      value: [{value:'234rf'}],
      x: JSON.parse(JSON.stringify([1,234]))
    }
  },
  methods:{
    test(){
      this.value[0].value = '222'
      console.log(this.value)
      this.value.split(0, 1)
      console.log(this.value)
    }
  }
}
</script>