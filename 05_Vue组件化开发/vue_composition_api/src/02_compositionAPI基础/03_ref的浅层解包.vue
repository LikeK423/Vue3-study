<template>
  <div>
    <h1>Home Page</h1>
    <h4>当前计数：{{ counter }}</h4>
    <!-- ref的解包只是浅层解包，info只是一个普通的js对象 -->
    <h4>当前计数：{{ info.counter.value }}</h4>
    <!-- 如果最外层包裹的是一个reactive可响应对象，那么内容的ref可以解包 -->
    <h4>当前计数：{{ reactiveInfo.counter }}</h4>
    <button @click="increment">+</button>
  </div>
</template> 
<script>
import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  setup(props, {attrs,slots,emit}){
    
    let counter = ref(100); 

    const info = {
      counter
    }

    const reactiveInfo = reactive({
      counter
    })

    const increment = ()=>{
      counter.value++;
      console.log(counter);
      console.log(counter.value);
    }
    return {
      counter,
      info,
      reactiveInfo,
      increment
    }
  }
}
</script>
<style scoped>

</style>