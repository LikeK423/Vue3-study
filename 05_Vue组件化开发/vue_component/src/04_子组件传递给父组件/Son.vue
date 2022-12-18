<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="incrementN">+N</button>
    <input type="text" v-model.number="num">
  </div>
</template>
<script>
export default {
  // 数组写法
  // emits:["add","sub","addN"],
  // 对象写法：目的是进行参数验证
  emits:{
    add:null,
    sub:null,
    addN:payload=>{
      console.log(payload);
    }
  },
  data(){
    return{
      num:123
    }
  },
  methods:{
    increment(){
      this.$emit("add")
    },
    decrement(){
      this.$emit("sub")
    },
    incrementN(){
      this.$emit("addN",this.num)
    }
  }
}
</script>
<style scoped>

</style>