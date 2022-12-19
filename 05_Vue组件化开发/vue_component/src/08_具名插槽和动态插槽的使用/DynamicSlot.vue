<template>
  <div>
    <slot :name="name"><i>默认</i></slot>
  </div>
</template>
<script>
export default {
  props:{
    name:String
  }
}
</script>
<style scoped>

</style>