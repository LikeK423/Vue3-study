<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>
<script>
import {demoMixin} from './mixins/demoMixin.js';

export default {
  mixins:[demoMixin],
  data () {
    return {
      message:"君子坦荡荡，小人常戚戚。"
    }
  },
  created(){
    console.log("App.vue组件的生命周期");
  },
  methods:{
    foo(){
      console.log("使用了App.vue method");
    }
  }
}
</script>
<style scoped>

</style>