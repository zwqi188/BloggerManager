module.exports = /*@ngInject*/function (CONFIG, CONSTANT, $q, Network, NgTableParams, $filter, $scope, loginService, $state, Util,MenuService) {
    'use strict';
    document.body.scrollTop = 0;
    var vm = this;

    init(); //页面初始化函数

    function init(){
        MenuService.changeActiveClass("spot");
    }


};