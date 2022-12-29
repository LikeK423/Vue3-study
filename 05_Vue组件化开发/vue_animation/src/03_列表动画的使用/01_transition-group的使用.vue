<template>
  <div class="app">
    <button @click="addNum">添加数字</button>
    <button @click="delNum">删除数字</button>
    <button @click="shuffleNum">数字洗牌</button>
    
    <transition-group tag="p" name="why">
      <span v-for="item in nums" :key="item" class="item">{{ item }}</span>
    </transition-group>
  </div>
</template>
<script>
import _ from "lodash"

export default {
  data() {
    return {
      nums:[0,1,2,3,4,5,6,7,8,9],
      numberCounter:10
    };
  }, 
  methods:{
    addNum(){
      this.nums.splice(this.randomIndex(),0,this.numberCounter++);
    },
    delNum(){
      this.nums.splice(this.randomIndex(),1);
    },
    randomIndex(){
      return Math.floor(Math.random() * this.nums.length)
    },
    shuffleNum(){
      this.nums = _.shuffle(this.nums);
    }
  }
};
</script>
<style scoped>
.app {
  margin: 200px auto;
}
.title {
  display: inline-block;
}
.item{
  margin: 50px 20px;
  display: inline-block;
}

.why-enter-to,
.why-leave-from{
  opacity: 1;
}
.why-enter-from,
.why-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.why-enter-active,
.why-leave-active{
  transition: all 1s ease; 
}

.why-leave-active{
  position: absolute;
}
.why-move {
  transition: transform 1s ease;
}
</style>
