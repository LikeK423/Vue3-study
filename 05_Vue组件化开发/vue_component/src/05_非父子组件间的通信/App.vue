<template>
  <div>
    <h1>我是父组件</h1>
    <button @click="add">增加name数组内容</button>
    <hr>
    <son></son>
  </div>
</template>
<script>
import Son from './Son.vue'

export default {
  components: {
    Son
  },
  data () {
    return {
      name:["天乙道人","石清露","天竺僧人","张十五"]
    };
  },
  // provide:{
  //   name:" 白居易",
  //   age:"23",
  //   length:this.name.length //! 这里的this是undefined
  // }
  provide(){
    return{
      name:" 白居易",
      age:"23",
      length:this.name.length // this.name.length = data里面的name的长度。并且这是一次性赋值的，因此更改数组长度后也不会发生变化。
    }
  },
  methods:{
    add(){
      this.name.push("宗赞王子")
      console.log(this.name);
    }
  }
}
</script>
<style scoped>

</style>