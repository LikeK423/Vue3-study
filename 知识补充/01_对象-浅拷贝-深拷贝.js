// 对象是引用类型
// const info  ={
//   name:'崔绿华',
//   age:20
// }
// const obj1 = info;
// console.log("修改obj1前,obj1",obj1)
// obj1.name = "林远图"
// console.log("修改obj1后obj1",obj1)
// console.log("info",info)


// 浅拷贝
// const obj2 = Object.assign({},info);//Object.assign返回一个新的对象,对info第一层的值进行拷贝，深一层的不会进行拷贝（如对象里面的对象）
// console.log("修改obj2前,obj2",obj2)
// obj2.name = "努儿海"
// console.log("修改obj2后,obj2",obj2)
// console.log("info",info)


// const data = {
//   name:"杨康",
//   friend:{
//     name:"梅超风"
//   }
// }
// const obj3 = Object.assign({},data)// obj3.friend 的值等于 data.friend的值（都是指针，指向同一个地址）
// console.log("修改obj3.friend.name前",obj3)
// obj3.friend.name = "贾布"
// console.log("修改obj3.friend.name后",obj3)
// console.log("data",data)


// 深拷贝
const info = {
  name:"李傀儡",
  address:"湖北省武汉市江岸区黄浦大街288号",
  friend:{
    name:"段延庆",
    phone:"0532-86105200"
  }
}
const obj = JSON.parse(JSON.stringify(info)) 
console.log("修改info前,obj",obj)
info.friend.name = "木华黎"
console.log("修改info后,obj",obj) 