<template>
  <div>
    <button v-for="item in tabs" :key="item" @click="itemClick(item)" :class="{ active: currentTab === item }">
      {{ item }}
    </button>

    <hr>
    1. v-if实现(缺点是过于臃肿)
    <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template>
    <hr>
 
    2.动态组件实现
    <!-- 使用include时需要在export default里面定义name属性 -->
    <keep-alive include="home,about">
      <component :is="currentTab" name="Hello" :age="18"></component>
    </keep-alive>
    

  </div>
</template>
<script>
import Home from "./page/Home.vue";
import Category from "./page/Category.vue";
import About from "./page/About.vue";

export default {
  components: {
    About,
    Home,
    Category
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
  },
};
</script>
<style scoped>
.active {
  color: red;
}
</style>
