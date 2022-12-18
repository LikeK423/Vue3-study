<template>
  <div>
    <son title="Hello" content="world" xyz="abcd"></son>
    <son :title="title" :content="content"></son>
    <son :title="message.title" :content="message.content"></son>
    <son v-bind="message"></son>
  </div>
</template>
<script>
import Son from "./Son.vue"

export default {
  components: {
    Son
  },
  data () {
    return{
      title:"HHH",
      content:"XXX",
      message:{
        title:"888",
        content:"666"
      }
    }
  }
}
</script>
<style scoped>

</style>