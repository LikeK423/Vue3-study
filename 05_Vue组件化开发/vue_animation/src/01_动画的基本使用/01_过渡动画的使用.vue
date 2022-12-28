<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <h1 v-if="isShow">谛，自既灌而往者，吾不欲观之矣。</h1> -->

    <transition name="animation">
      <h1 v-if="isShow">谛，自既灌而往者，吾不欲观之矣。</h1>
    </transition>
  </div>
</template>
<script>
export default { 
  data(){
    return{
      isShow:true
    }
  }
}
</script>
<style scoped>
  .animation-enter-from,
  .animation-leave-to{
    opacity: 0;
  }
  .animation-enter-to,
  .animation-leave-from{
    opacity: 1;
  }
  .animation-enter-active,
  .animation-leave-active{
    transition: opacity 3s ease;
  }
</style>