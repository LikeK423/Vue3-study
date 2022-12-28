<template>
  <div class="app">
    <button style="display:block" @click="isShow = !isShow">显示/隐藏</button>

    <transition name="animation" mode="out-in" appear><!-- 在页面加载时动画生效，添加 :appear="true"或者appear （appear默认false）-->
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition>
  </div>
</template>
<script>
import Home from './page/Home.vue';
import About from './page/About.vue';

export default { 
  components:{
    Home,
    About
  },
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