<template>
  <div>
    <h3>组件开始</h3>
      <slot><i>插槽默认内容,如没有传入数据则显示默认内容</i></slot>
    <h3>组件结束</h3>
    <hr>
  </div>
</template>
<script>
export default {
  components: {},
  props: [""],
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
<style scoped>
</style>