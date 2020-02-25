module.exports = /*@ngInject*/function (CONFIG, CONSTANT, $q, Network, NgTableParams, $filter, $scope, loginService, $state, Util,MenuService) {
    'use strict';
    document.body.scrollTop = 0;
    var vm = this;

    init(); //页面初始化函数

    function init(){
        MenuService.changeActiveClass("user");
    }


    $scope.getUserInfoByCondition = function () {
        var account = $scope.account;
        var params = {
            "account" : account
        };
        getFromServer(params);
    }

    $scope.deleteByUser = function (user) {
        var userId = user.id;
        var params = {
            "userId": userId
        };
        deleteFromServer(params);
    }

    function deleteFromServer(param) {
        Network.post4Data({
            url: CONFIG.SERVER_ADDRESS + CONSTANT.API.DELETE_BY_ID,
            method: CONFIG.REQUEST_METHOD_POST,
            data: param,
            success: function (data) {
                alert(data.respMsg);
            },
            fail: function (data) {
                alert(data.respMsg);
            }
        });
    }

    function getFromServer(params) {
        var defer = $q.defer();
        Network.post4Data({
            url: CONFIG.SERVER_ADDRESS + CONSTANT.API.GET_USERINFO_BY_CONDITION,
            method: CONFIG.REQUEST_METHOD_POST,
            data: params,
            success: function (data) {
                if (data.respCode == CONSTANT.RESP_CODE.SUCCESS) {
                    defer.resolve(data.data);
                    refresh(defer);
                } else {
                    alert(data.respMsg);
                }
            },
            fail: function (data) {
                alert(data.respMsg);
            }
        });
    }

    function refresh(defer) {
        defer.promise.then(function (list) {//数据返回后创建ng-table，或者直接将该函数放置于success
            vm.tableInfo = new NgTableParams({
                page: 1,
                count: 5
            }, {
                counts: [5, 10, 20],
                dataset: list
            });
        });
    }

};