<template>
  <div>
   <p>异步组件目的：代码分包</p>
    <p>App组件</p>
    <AsyncHome></AsyncHome>
    
    <suspense>
      <template #default>
        <AsyncHome></AsyncHome>
      </template>
      <template #fallback>
        <Loading></Loading>
      </template>
    </suspense>
  </div>
</template>
<script>
import Loading from "./Loading.vue"
// 导入组件
// import AsyncHome from "./AsyncHome.vue";
// 组件分包
import { defineAsyncComponent } from "vue";
// 1.工厂函数
const AsyncHome = defineAsyncComponent(() => import("./AsyncHome.vue"));
// 2.对象
// const AsyncHome = defineAsyncComponent({
//   loader:()=> import("./AsyncHome.vue"),
//   loadingComponent:Loading, // 占位组件，当AsyncHome还没加载好的时候让Loading组件占个位置
//   // errorComponent: // 加载失败显示的组件
//   // delay:2000 //显示Loading组件前等待多少秒
//   onError:function(err, retry, fail, attempts){
//     // err，错误信息；retry，调用retry尝试重新加载；fail,指示加载程序退出；attempts记录尝试的次数
//   }
// })



// 正常导入模块
// import { sum } from "./utils/math.js";
// console.log(sum(20,30));

// 通过import函数导入的模块，webpack对其打包时就会进行分包的操作
import("./utils/math.js").then((res) => {
  console.log(res.sum(20, 30));
});

export default {
  components: {
    AsyncHome,
    Loading
  },
};
</script>
<style scoped></style>
