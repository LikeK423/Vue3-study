<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style scoped>
.nav-bar{
  display: flex;
}
.left, .right,.center{
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.left, .right{
  width: 80px;
  background-color: aqua;
}
.center{
  flex: 1;
  background-color: rgb(30, 202, 68);
}
</style>
