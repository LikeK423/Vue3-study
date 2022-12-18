<template>
  <div>
    <h1>App</h1>
    <Hello></Hello>
  </div>
</template>
<script>
import Hello from "./Hello.vue";
export default {
  components:{
    Hello
  }
}
</script>

<style scoped>
/* scoped 用于防止css污染 */
h1{
  color: aqua;
}
</style>