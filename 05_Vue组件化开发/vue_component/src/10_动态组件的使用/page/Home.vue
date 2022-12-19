<template>
  <div>
    <h1>这是Home组件:{{ name }} - {{ age }}</h1>
  </div>
</template>
<script>
export default {
  name:'home',
  props:{
    name:{
      type:String,
      default:""
    },
    age:{
      type:Number,
      default:0
    }
  }
}
</script>
<style scoped>

</style>