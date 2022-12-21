<template>
  <div>
    {{ message }}
    <hr>
    <input type="text" v-model="message">
    <hr><!-- 等价于 -->
    <input type="text" :value="message" @input="message = $event.target.value">
  </div>

  <!-- 组件使用v-model -->
  <son v-model="message"></son>
  <!-- 等价于 -->
  <!-- <son :modeValue="message" @update:model-value="message = $event"></son> -->
</template>
<script>
import Son from "./Son.vue";

export default {
  components:{
    Son
  },
  data () {
    return {
      message:"Hello, world"
    }
  },
  methods: {}
}
</script>
<style scoped>

</style>