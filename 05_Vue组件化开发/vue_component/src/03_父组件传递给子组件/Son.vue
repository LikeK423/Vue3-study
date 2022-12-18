<template>
  <div>
    <h1 :xyz="$attrs.xyz">{{ title }}</h1><!-- 通过$attrs访问 非props的attribute -->
    <h2>{{ content }}</h2>
  </div>
</template>
<script>
export default {
  // props:['title','content'],
  // 或
  props: {
    title: String,
    content: {
      type: String,
      required: true, // 表示必传
      default: "默认值",
    },
    info: {
      type: [Object,Array], // 对象或者数组的默认值必须从工厂函数获取
      default() {
        return {};
      },
    },
  },
  inheritAttrs:false
  // 当父组件传递了一个不属于props的值时（比如xyz），则该传入的xyz的值会绑定在根节点上（例如上面template的div）。
};
</script>
<style scoped></style>
