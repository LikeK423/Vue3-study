<template>
  <div>
    <h1>当前计数：{{ counter }}</h1>
    <Son  @add="add1" 
          @sub="sub1" 
          @addN="addNum"></Son>
  </div> 
</template>
<script>
import Son from './Son.vue'

export default {
  components:{
    Son
  },
  data () {
    return {
      counter:0
    };
  },
  methods:{
    add1(){
      this.counter++
    },
    sub1(){
      this.counter--
    },
    addNum(num){
      this.counter+=num
    }
  }
}
</script>
<style scoped>

</style>