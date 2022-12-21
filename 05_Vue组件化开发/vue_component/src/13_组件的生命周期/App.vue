<template>
  <div>
    <button @click="btn">切换组件</button>
    <template v-if="isShow">
      <Home></Home>
    </template>
  </div>
</template>
<script>
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },
  data() {
    return {
      isShow:true
    };
  },
  methods: {
    btn(){
      this.isShow = !this.isShow
    }
  },
  computed: {},
};
</script>
<style scoped></style>
