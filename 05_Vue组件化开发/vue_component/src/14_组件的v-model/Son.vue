<template>
  <div>
    <button @click="btn">Son组件按钮</button>
  </div>
</template>
<script>
export default {
  props:{
    modeValue:String
  },
  emits:["update:modelValue"],
  methods: {
    btn(){
      this.$emit("update:model-value","子组件触发的emit事件")
    }
  }
}
</script>
<style scoped>

</style>