<template>
  <div>
    1.插入html元素
    <one-slot>
      <button>按钮</button>
    </one-slot>
    2.插入普通文本
    <one-slot>普通文本</one-slot>
    3.插入组件
    <one-slot>
      <Btn />
    </one-slot>
    4.默认内容
    <one-slot />
    5.插入多个内容，一个插槽，将全部数据塞入到一个插槽里面
    <one-slot>
      <h2>Hello,world</h2>
      <button>按钮</button>
    </one-slot>
    6.插入多个内容，多个插槽，将全部数据塞入到每一个插槽里面
    <more-slot>
      <h2>Hello,world</h2>
      <button>按钮</button>
    </more-slot>
  </div>
</template>
<script>
import OneSlot from "./OneSlot.vue";
import MoreSlot from "./MoreSlot.vue";
import Btn from "./btn.vue";

export default {
  components: {
    OneSlot,
    Btn,
    MoreSlot,
  },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
