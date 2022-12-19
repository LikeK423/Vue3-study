<template>
  <div>
    <son :names="names">
      <!-- 插槽没有名字时的写法 -->
      <template v-slot="slotProps">
        <button>{{ slotProps.item }}-{{ slotProps.index }}</button>
      </template>
      <!-- 等价于 -->
      <!-- <template v-slot:default="slotProps">
        <button>{{ slotProps.item }}-{{ slotProps.index }}</button>
      </template> -->

      <!-- 插槽有名字时的写法 -->
      <!-- <template v-slot:what="slotProps">
        <button>{{ slotProps.item }}-{{ slotProps.index }}</button>
      </template> -->
    </son>

    <!-- 独占默认插槽的缩写（如果组件里面含有其它具名插槽，并尝试向该插槽赋值会报错，如果不向该插槽赋值并不会报错） -->
    <son :names="names" v-slot="slotProps">
      <button>{{ slotProps.item }}-{{ slotProps.index }}</button>
    </son>
  </div>
</template>
<script>
import Son from "./Son.vue";

export default {
  components: {
    Son,
  },
  data() {
    return {
      names: ["梁发", "胖妇人", "易师爷", "都史"],
    };
  }
};
</script>
<style scoped></style>
