<template>
  <div>
    <p>{{ message }}</p>
    <button @click="btn">修改message</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      message:"Hello,world"
    }
  },
  methods:{
    btn(){
      this.message = "Hello,new world"
    }
  },
  // 加载页面时生效
  beforeCreate(){
    console.log("beforeCreate");
  },
  created(){
    console.log("created");
  },
  beforeMount(){
    console.log("beforeMount");
  },
  mounted(){
    console.log("mounted");
  },
  // 卸载页面时生效(卸载时将注册的事件删除掉)
  beforeUnmount(){
    console.log("beforeUnmount");
  },
  unmounted(){
    console.log("unmounted");
  },
  // 更新元素时生效
  beforeUpdate(){
    console.log("beforeUpdate");
  },
  updated(){
    console.log("updated");
  }
}
</script>
<style scoped>

</style>