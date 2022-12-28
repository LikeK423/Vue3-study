<template>
  <div class="app">
    <button style="display:block" @click="isShow = !isShow">显示/隐藏</button>

    <!-- <transition name="animation">
      <h2 class="title" v-if="isShow">谛，自既灌而往者，吾不欲观之矣。</h2>
      <h2 class="title" v-else>德不孤，必有邻。</h2>
    </transition> -->

    <transition name="animation" mode="out-in">
      <h2 class="title" v-if="isShow">谛，自既灌而往者，吾不欲观之矣。</h2>
      <h2 class="title" v-else>德不孤，必有邻。</h2>
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
  .app{
    width: 400px;
    margin: 0 auto;
  }
  .title{
    display: inline-block;
  }

  .animation-enter-from,
  .animation-leave-to {
    opacity: 0;
  }

  .animation-enter-active,
  .animation-leave-active {
    transition: opacity 1s ease;
  }

  .animation-enter-active{
    animation: bounce 1s ease;
  }
  .animation-leave-active{
    animation: bounce 1s ease reverse;
  }
  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>