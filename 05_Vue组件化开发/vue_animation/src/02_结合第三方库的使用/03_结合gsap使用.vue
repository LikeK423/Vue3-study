<template>
  <div class="app">
    <button style="display: block" @click="isShow = !isShow">显示/隐藏</button>

    <transition>
      <h2 v-if="isShow">
        <input type="number" step="100" v-model="counter">
        <p>当前：{{ counter }}</p>
        <p>当前：{{ showCounter }}</p>
        <p>当前：{{ showNum.toFixed(0) }}</p>
      </h2>
    </transition>
  </div>
</template>
<script>
import gsap from "gsap"

export default {
  data() {
    return {
      isShow: true,
      counter:0,
      showNumber:0,
      showNum:0
    };
  },
  computed:{
    showCounter(){
      return this.showNumber.toFixed(0)
    }
  },
  watch:{
    counter(newValue){
      gsap.to(this,{duration:1,showNumber : newValue})
      gsap.to(this,{duration:1,showNum : newValue})
    }
  }
};
</script>
<style scoped>
.app {
  width: 400px;
  margin: 200px auto;
}
.title {
  display: inline-block;
}
</style>
