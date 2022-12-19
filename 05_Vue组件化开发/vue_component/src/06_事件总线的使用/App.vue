<template>
  <div>
    <son/>
  </div>
</template>
<script>
import Son from './Son.vue'
import emitter from './eventBus.js'

export default {
  components:{
    Son
  },
  data () {
    return {

    };  
  },
  created(){
    // 写法1
    // emitter.on("why",(info)=>{
    //   console.log("why",info);
    // })
    // emitter.on("what",(info)=>{
    //   console.log("what",info);
    // })

    // 写法2（监听所有）（如果写法1和写法2一起写回导致多次发送事件）
    emitter.on("*",(type,info)=>{
      console.log("* listener",type,info);
    })
  }
}
</script>
<style scoped>

</style>