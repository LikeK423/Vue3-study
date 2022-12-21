<template>
  <div>
    1.绑定到
    <h2 ref="abc">title</h2>
    2.绑定到组件
    <Home ref="home"></Home>

    <button @click="btn">App: 获取元素</button>
  </div>
</template>
<script>
import Home from "./Home.vue";

export default {
  components: {
    Home
  },
  data () {
    return {

    }
  },
  methods: {
    btn(){
      // this.$refs是一个对象，里面存放着我们注册的所有ref对象
      console.log(this.$refs.abc);
      console.log(this.$refs.home);
      console.log(this.$refs.home.message);
      this.$refs.home.sayHello();
    }
  }
}
</script>
<style scoped>

</style>