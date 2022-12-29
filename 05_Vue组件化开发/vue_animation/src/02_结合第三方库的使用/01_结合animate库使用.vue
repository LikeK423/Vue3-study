<template>
  <div class="app">
    <button style="display:block" @click="isShow = !isShow">显示/隐藏</button>

    <!-- <transition name="animation">
      <h2 v-if="isShow">譬如为山，未成一篑，止，吾止也，譬如平地，虽覆一篑，进，吾往也。</h2>
    </transition> -->

    <transition enter-active-class="animate__animated animate__backInDown"
                leave-active-class="animate__animated animate__backOutDown">
      <h2 v-if="isShow">譬如为山，未成一篑，止，吾止也，譬如平地，虽覆一篑，进，吾往也。</h2>
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
    margin: 200px auto;
  }
  .title{
    display: inline-block;
  }

  .animation-enter-active{
    animation: backInRight 1s ease;
  }
  .animation-leave-active{
    animation: backInRight 1s ease reverse;
  }
</style>