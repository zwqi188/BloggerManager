
/* 此处require为全局引用，在controller或service中可通过注入或直接引用。也可在需要使用的模块中进行require */
jQuery = $ = require('jquery');


require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('common');//自定义常见统一样式，位于components/common/stylus/
require('font-awesome.css');//纯css实现icon集，位于vendor文件夹
require('ng-table/dist/ng-table.min.css');//ng-table表格插件样式文件，见table页
require('bootstrap-wysiwyg/js/bootstrap-wysiwyg.min.js');
require('jquery.hotkeys/jquery.hotkeys');
require('jqueryui/jquery-ui.css');
require('jqueryui/jquery-ui.js');

echarts = require('echarts');//图表控件见from页 API：http://echarts.baidu.com/

var app = require('angular')
    .module('app', [
            require('angular-ui-router'),//用于单页面路由，见components/routerBuilder
            require('angular-ui-bootstrap'),
            require('angular-sanitize'),//用于cvs文件导出，见table页
            require('oclazyload'),//用于懒加载
            require('services/configService').name,//根据不同环境，加载不同配置
            require('services/constantService').name,//定义常量，以及API
            require('services/bootService').name,//定义 应用启动时执行操作，一般为处理webview协议注册以及 定义页面切换时事件
            require('services/globalService').name,//可 用于全局数据传递等
            require('services/networkService').name,
            require('services/utilService').name,
            require('services/amrPlayerService').name,//用于web播放amr格式语音，需要依赖vendor/combine-arm.js
            require('services/loginService').name,
            require('services/menuService').name,
            require('directives/layout').name,
            require('directives/treeView').name,
            require('directives/editor').name,
            require('filters').name,//自定义过滤器
            require('ng-table/dist/ng-table.min.js').name,
            require('views/global').name//可用于统一初始化头部栏，侧边栏的数据等。其他view的controller在routerBuilder中已经require

    ]);

require('routerBuilder')(app);

//设置跳转白名单，解决ng-href生成的链接提示unsafe而不能跳转的问题
app.config(/*@ngInject*/function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?):/);
});

angular.bootstrap(document.body, ['app']);

