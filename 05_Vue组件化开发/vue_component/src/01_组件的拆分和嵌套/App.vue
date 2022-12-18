<template>
  <div>
    <Header></Header><!-- 开头可以大写 -->
    <bodies></bodies><!-- 开头可以小写 -->
    <footer-content></footer-content><!-- 驼峰法转换为用-连接 -->
  </div>
</template>
<script>
import Header from "./Header.vue";
import Bodies from "./Body.vue";
import FooterContent from "./Footer.vue";

export default {
  name:'',
  components: {
    // ES6：为对象字面量属性赋值为同名的局部变量时，不必再写:和值，只写属性名即可。
    Header,
    Bodies,
    FooterContent
  },
  data () {
    return {

    };
  }
}
</script>
<style scoped>

</style>