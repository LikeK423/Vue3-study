<template>
  <div>
    <!-- 
    <template v-for="item in names" :key="item">
      <p>{{ item }}</p>
    </template> 
    -->

    <!-- 当我们不想用p包裹item，还想用span，div之类的，需要换成slot -->
    <template v-for="(item, index) in names" :key="item">
      <slot :item="item" :index="index"></slot>
      <!-- <slot name="why"><i>默认</i></slot> -->
    </template>
  </div>
</template>
<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => {},
    },
  },
};
</script>
<style scoped></style>
