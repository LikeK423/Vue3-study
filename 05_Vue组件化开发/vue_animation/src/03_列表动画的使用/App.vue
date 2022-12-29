<template>
  <div class="app">
    <input v-model="keyWord" />
    <transition-group tag="ul" name="why" :css="false"
                      @enter="enter"
                      @leave="leave"
                      @before-enter="beforeEnter">
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">{{ item }}</li>
    </transition-group>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  data() {
    return {
      names: ["abc", "ehs", "sdfth", "yp", "ao", "sdo", "aslf"],
      keyWord: "",
    };
  },
  computed: {
    showNames() {
      return this.names.filter((item) => item.indexOf(this.keyWord) !== -1);
    },
  },
  methods: {
    beforeEnter(e){
      e.style.opacity = 0;
      e.style.height = 0;
    },
    enter(e,done){
      gsap.to(e,{
        opacity:1,
        height:"1.5em",
        delay:e.dataset.index * 0.5,
        onComplete:done
      })
    },
    leave(e,done){
      gsap.to(e,{
        opacity:0,
        height:"0",
        delay:e.dataset.index * 0.5,
        onComplete:done
      })
    }
  },
};
</script>
<style scoped>
.why-enter-from,
.why-leave-to {
  opacity: 0;
}
.why-enter-active,
.why-leave-active {
  transition: all 1s ease;
}
</style>
