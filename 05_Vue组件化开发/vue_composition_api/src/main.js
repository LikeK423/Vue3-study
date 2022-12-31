import { createApp } from 'vue'

// import App from "./01_mixin和extends/App.vue"
import App from "./02_compositionAPI基础/App.vue"

// createApp(App).mount('#app');

const app = createApp(App);
  
// 全局混入mixin
// app.mixin({
//   data () {
//     return {
//       message:"听其言而观其行。道千乘之国，敬事而信，节用而爱人，使民以时。"
//     }
//   },
//   created(){
//     console.log("全局混入的的生命周期");
//   }
// })

app.mount('#app');