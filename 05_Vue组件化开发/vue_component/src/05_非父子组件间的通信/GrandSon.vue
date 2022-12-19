<template>
  <div>
    <h1>我是子组件的子组件,接受的数据是：{{ name }}-{{ age }}-{{ length }}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {

    };
  },
  inject:["name","age","length"]
}
</script>
<style scoped>

</style>