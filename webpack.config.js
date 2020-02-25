/**
 *
 * webpack-dev-server --content-base ../../ -d --hot   ***for develop *
 *
 * webpack --progress --colors -d --config webpack.manual.js  *** for deployment *
 *
 */
var webpack = require('webpack');
var BUILD_ENV = process.env.BUILD_ENV;
var definePlugin = new webpack.DefinePlugin({__ENV__: JSON.stringify(BUILD_ENV)});

module.exports = {
    /* 入口文件*/
    entry: {
        app: ["./app/main.js"]
    },
    // pack file
    output: {
        // 打包文件存放的绝对路径
        path: "output/dist",
        // 打包后的文件名
        filename: "bundle.js",

        // lazy pack file [id] 1,2,3.....
        chunkFilename: "[id].[chunkhash].bundle.js",
        //网站运行时的访问路径
        publicPath: 'dist/'
    },
    //加载器
    module: {
        loaders: [
            //css加载器
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {test: /\.styl$/, loader: 'style!css!stylus'},

            //图片加载器
            {test: /\.(eot|woff|woff2|gif|png|svg|ttf|jpg)(\?v=(\d|\.)*)*$/, loader: "file-loader"}
        ]
    },

    //插件
    plugins: [definePlugin],

    // 默认模块路径
    resolve: {
        modulesDirectories: ["node_modules", "app/components", "app/vendor"]
    }

};