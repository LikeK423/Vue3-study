<template>
  <div>
    <h2>home组件</h2>
    <button @click="getParentAndRoot">Home: 获取父组件和根组件</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      message:"Home组件信息"
    }
  },
  methods:{
    sayHello(){
      console.log("Hello ~ 这是Home组件的方法");
    },
    getParentAndRoot(){
      console.log(this.$parent);
      console.log(this.$root);
    }
  }
}
</script>
<style scoped>

</style>