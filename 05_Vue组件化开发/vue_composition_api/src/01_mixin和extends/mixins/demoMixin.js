export const demoMixin = {
  data () {
    return {
      message:"道千乘之国，敬事而信，节用而爱人，使民以时。"
    }
  },
  methods:{
    foo(){
      console.log("使用了demoMixin method");
    }
  },
  created(){
    console.log("demoMixin的生命周期");
  }
}