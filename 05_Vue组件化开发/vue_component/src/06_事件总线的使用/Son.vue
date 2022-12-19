<template>
  <div>
    <h1>我是子组件</h1>
    <button @click="btn1">发送一个事件</button>
    <button @click="btn2">发送多个事件</button>
  </div>
</template>
<script>
import emitter from './eventBus.js'

export default {
  data () {
    return {

    };
  },
  methods:{
    btn1(){
      emitter.emit("why",{name:"方证",age:17})
    },
    btn2(){
      emitter.emit("why",{name:"封不平",age:47})
      emitter.emit("what",{name:"单季山",age:19})
    }
  }
}
</script>
<style scoped>

</style>