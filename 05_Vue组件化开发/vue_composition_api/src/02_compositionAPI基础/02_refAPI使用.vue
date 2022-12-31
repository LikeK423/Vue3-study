<template>
  <div>
    <h1>Home Page</h1>
    <!-- 在template里面使用ref对象时，会自动解包 -->
    <h4>当前计数：{{ counter }}</h4>
    <button @click="increment">+</button>
  </div>
</template> 
<script>
import { ref } from 'vue';

export default {
  setup(props, {attrs,slots,emit}){
    let counter = ref(100);
    const increment = ()=>{
      counter.value++;
      console.log(counter);
      console.log(counter.value);
    }
    return {
      counter,
      increment
    }
  }
}
</script>
<style scoped>

</style>