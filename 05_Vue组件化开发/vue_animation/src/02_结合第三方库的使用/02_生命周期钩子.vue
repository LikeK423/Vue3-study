<template>
  <div class="app">
    <button style="display: block" @click="isShow = !isShow">显示/隐藏</button>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave">
      <h2 v-if="isShow">
        譬如为山，未成一篑，止，吾止也，譬如平地，虽覆一篑，进，吾往也。
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
    };
  },
  methods: {
    beforeEnter() {
      console.log("beforeEnter");
    },
    enter(element,done) {
      console.log("enter");
      gsap.from(element,{
        scale:0,
        x:200,
        onComplete:done
      })
    },
    afterEnter() {
      console.log("afterEnter");
    },
    beforeLeave() {
      console.log("beforeLeave");
    },
    leave(element,done) {
      console.log("leave");
      gsap.to(element,{
        scale:0,
        x:200,
        onComplete:done
      })
    },
    afterLeave() {
      console.log("afterLeave");
    },
  },
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
