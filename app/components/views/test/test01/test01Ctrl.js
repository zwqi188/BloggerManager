module.exports = /*@ngInject*/function (CONFIG, CONSTANT, $q, Network, NgTableParams, $filter, $scope, loginService, $state, Util,MenuService) {
    'use strict';
    document.body.scrollTop = 0;
    var vm = this;

    init(); //页面初始化函数

    function init(){
        MenuService.changeActiveClass("test");
        $scope.menuList= ["test01","test02","test03","test04","test05"];
    }

    $scope.print = function (menulist) {
        console.log(menulist);
    }

    $scope.keyup = function (index) {
        console.log("keyup---"+ index);
        var arr=$('.sortable').sortable('toArray');
        console.log(arr);
    }

};