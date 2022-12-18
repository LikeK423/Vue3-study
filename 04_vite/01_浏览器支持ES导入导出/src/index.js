// import _ from "lodash-es" //* 1. 这种简写路径浏览器不能识别，以前是由webpack帮我们解析的
import _ from "../node_modules/lodash-es/lodash.default" //* 2. 需要手动配置路径

// 导入文件必须具有后缀名，无后缀名会导致浏览器不能识别
import { sum } from "./math.js"


console.log(sum(10,20)) // 现在浏览器在一定程度上也支持ES的导入导出
console.log(_.join(["1","2"],"-")) // 如果是第1种导入路径的话浏览器不能识别，只能识别第2种。因此如果第三方包支持ES导入的，则也是能直接在浏览器运行。缺点：造成大量网络请求