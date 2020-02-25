var gulp = require('gulp');
var webpack = require("webpack");
var plugin = require('gulp-load-plugins')();
var webpackConfig = require("./webpack.config.js");
var BUILD_ENV = process.env.BUILD_ENV;

//先清除掉之前gulp生成的output/文件夹，然后清除掉之前webpack打包生成的文件夹，以避免自动构建时打的包越来越大
gulp.task('cleanDist', function () {
    var stream = gulp.src(['output/'], {read: false})
        .pipe(plugin.clean());
    return stream;
});

//webpack打包，资源放在output/dist/下
gulp.task('webpack:build', ['cleanDist'], function (callback) {
    var myConfig = Object.create(webpackConfig);
    webpack(myConfig, function () {
        callback();
    });
});

//升级引用路径,拷贝文件
gulp.task('updateSrc', ['webpack:build'], function (callback) {
    //处理健康检查需要的文件,拷贝到主html同级目录
    gulp.src('health.html')
        .pipe(gulp.dest('output/'));
    //拷贝并替换资源引用路径
    var stream = gulp.src('index.html')
        .pipe(plugin.replace('href="/"', 'href="/travelManage/"'))
        .pipe(gulp.dest('output/'));
    return stream;
});

//将懒加载的js文件压缩/混淆
gulp.task('uglify', ['updateSrc'], function (callback) {
    if (BUILD_ENV === "pro" || BUILD_ENV === "uat") {
        gulp.src(['output/dist/*.js', '!output/dist/bundle.js'])
            .pipe(plugin.uglify({
                mangle: false,//类型：Boolean 默认：true 是否修改变量名
                compress: true,//类型：Boolean 默认：true 是否完全压缩
                preserveComments: false //不保留所有注释
            }))
            .pipe(gulp.dest('output/dist/'));
    }
    callback();
});

//修改index.html中引用的js压缩并添加hash值且替换
gulp.task('usemin', ['uglify'], function (callback) {
    var stream = gulp.src('output/index.html')
        .pipe(plugin.usemin({
            js: [function () {
                if (BUILD_ENV === "pro" || BUILD_ENV === "uat") {
                    return plugin.uglify({
                        mangle: false,//类型：Boolean 默认：true 是否修改变量名
                        compress: true,//类型：Boolean 默认：true 是否完全压缩
                        preserveComments: false //不保留所有注释
                    });
                } else {
                    return gulp.src("");//此处不可删
                }
            }, plugin.rev]
        }))
        .pipe(gulp.dest('output/'));
    return stream;
});

//清除原有的bundle.js
gulp.task('clean', ['usemin'], function (callback) {
    var stream = gulp.src(['output/dist/bundle.js'], {read: false})
        .pipe(plugin.clean());
    return stream;
});

gulp.task('build', ['clean']); 