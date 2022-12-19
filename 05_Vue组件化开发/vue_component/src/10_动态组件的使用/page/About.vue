<template>
  <div>
    <h1>这是 About 组件</h1>
    <button @click="count++">{{ count }}</button>
  </div>
</template>
<script>
export default {
  name:"about",
  data () {
    return {
      count:0
    }
  }
}
</script>
<style scoped>

</style>