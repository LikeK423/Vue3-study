<template>
  <div>
    <h1>Home Page</h1>
    <h2>{{ message }}</h2>
    <h3>{{ title }}</h3>
    <h4>当前计数：{{ state.counter }}</h4>
    <button @click="increment">+</button>
  </div>
</template> 
<script>
import { reactive } from 'vue';

export default {
  props:{
    message:{
      type:String,
      required:true
    }
  },
  // props：父组件传递过来的属性
  // setup(props, context){
  //   console.log(props);
  //   console.log(props.message);
  //   console.log(context.attrs.xyz);
  //   console.log(context.slots);
  //   console.log(context.emit);
  // }
  setup(props, {attrs,slots,emit}){
    console.log(props);
    console.log(props.message);
    console.log(attrs.xyz);
    console.log(slots);
    console.log(emit);
    
    const state = reactive({
      // 不放到reactive里面则显示counter不会变化（counter不是响应式数据）
      counter:100
    })
    const increment = ()=>{
      state.counter++;
      console.log(state.counter);
    }

    return {
      title:"动人以言者，其感不深；动人以行者，其应必速。",
      state,
      increment
    }
  }
}
</script>
<style scoped>

</style>