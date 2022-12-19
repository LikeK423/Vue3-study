<template>
  <div>
    <h1>这是 category 组件</h1>
    <button @click="count++">{{ count }}</button>
  </div>
</template>
<script>
export default {
  name:"category",
  data () {
    return {
      count:0
    }
  }
}
</script>
<style scoped>

</style>