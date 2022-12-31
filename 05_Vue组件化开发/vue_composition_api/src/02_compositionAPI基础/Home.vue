<template>
  <div>
    <h1>Home Page</h1>
    <button @click="update">+</button>
  </div>
</template>
<script>
import { ref, readonly, reactive } from "vue";

export default {
  setup(props, { attrs, slots, emit }) {
    // 1.普通对象
    const info = { name: "李煜" };
    const readonlyInfo = readonly(info);
    // 2.reactive对象
    const info2 = reactive({ name:"贾布"});
    const readonlyInfo2 = readonly(info2);
    // 3.ref对象
    const info3 = ref("桃叶仙");
    const readonlyInfo3 = readonly(info3);

    const update = () => {
      readonlyInfo.name = "鲁有脚";
      readonlyInfo2.name = "钟灵";
      readonlyInfo3.value = "孙子";
    };
    return {
      update,
    };
  },
};
</script>
<style scoped></style>
