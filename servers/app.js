import express from "express";
//实例化 express
const app = express();

//系统模块 路径模块
import path from "path";

//引入 swig 模块
import Swig from 'swig';
//配置 swig
Swig.setDefaults({
  cache : false //不缓存文件
});
//加载 book 路由模块
import { Main } from "./router/book_router";
//实例化 book 路由模块
new Main(app);

app.get("/",function(req,res){
	res.render("index");
});


// 设置文件后缀的解释器  配置 render 输出的文件的解释器，编译
app.engine('html', Swig.renderFile);
//设置 页面的后缀  配置 render 输出文件的默认后缀
app.set('view engine', 'html');
//设置 页面的 跟目录  配置 render 输出文件的 根目录
app.set("views",path.join(__dirname,"../views"));
//把一个静态文件当做服务器
//可以直接从浏览器请求这个文件
app.use(express.static(path.join(__dirname,"../output")));

app.listen(3000,function(){
	console.log("open http://127.0.0.1:3000");
});
