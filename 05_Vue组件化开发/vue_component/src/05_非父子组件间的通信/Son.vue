<template>
  <div>
    <h1>我是子组件</h1>
    <hr>
    <grand-son></grand-son>
  </div>
</template>
<script>
import GrandSon from './GrandSon.vue'

export default {
  components: {
    GrandSon
  },
  data () {
    return {

    };
  }
}
</script>
<style scoped>

</style>