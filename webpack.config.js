 var path = require("path");
var fs = require("fs");
var webpack = require("webpack");
var staticRoot = path.resolve(__dirname, "./src");
var outputPath = path.resolve(__dirname, "./output");
var babelrc = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./.babelrc"), 'utf8')
);
module.exports = {
    entry: {
        //入口文件
        // key 为输出时的名字
        // value 时本地物理文件
        app: staticRoot + '/app' //需要打包的文件
    },
    output: {
        path: outputPath, //输出目录
        publicPath: staticRoot,        //引用目录  本地物理路径
        filename: '[name].build.js',   //输出名称
        sourceMapFilename: '[file].map'  //Source Map
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,        //检测以什么结尾的文件
                exclude: /node_modules/,  //排除某文件夹
                loader: ['babel'],        //使用什么模块来编译
                //配置
                query: babelrc
            }
        ]
    },
    //配合模块使用
    resolve: {
        //注意：配置的路径必须是绝对路径
        root: [ staticRoot ],
        //配置别名
        alias: [],
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        //提前加载模块
        //在使用中可以不在使用 var xxx = require("xxxx");
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ]
};