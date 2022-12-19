<template>
  <div>
    <h3>具名插槽(v-slot简写:将 v-slot: 替换成#)</h3>
    <nav-bar>
      <template v-slot:left>
        <button>左边的按钮</button>
      </template>
      <template #center>
        <strong>标题</strong>
      </template>
      <template #right>
        <button>右边的按钮</button>
      </template>
      <button></button>
    </nav-bar>

    <hr>

    <h3>动态插槽</h3>
    <DynamicSlot :name="name">
      <template #[name]>
        <i>传入的插槽内容</i>
      </template>
    </DynamicSlot>
  </div>
</template>
<script>
import NavBar from './NavBar.vue'
import DynamicSlot from "./DynamicSlot.vue";

export default {
  components:{
    NavBar,
    DynamicSlot
  },
  data(){
    return {
      name:"why"
    }
  }
}
</script>
<style scoped>

</style>