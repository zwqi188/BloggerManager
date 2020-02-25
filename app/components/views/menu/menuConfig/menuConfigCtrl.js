module.exports = /*@ngInject*/function (CONFIG, CONSTANT, $q, Network, NgTableParams, $rootScope, $filter, $scope, loginService, $state, Util,MenuService) {
    'use strict';
    document.body.scrollTop = 0;
    var vm = this;

    init(); //页面初始化函数

    function init(){
        MenuService.changeActiveClass("menu");
        $scope.canAddMainMenu = null;
    }

    $scope.getMenuListByParentId = function (parentId) {
        var param = {"parentId": parentId};
        getMenuListByParentIdFromServer(param);
    };

    $scope.deleteById = function (id) {
        var param = {"id": id};
        deleteByIdFromServer(param);
        window.reload();
    };


    $scope.canAdd = function (item) {
        for(var i = 0 ; i < $scope.menuList.length; i++) {
            if($scope.menuList[i].MenuId == item.MenuId) {
                console.log(item.MenuId + ";" + $scope.menuList[i].MenuId);
                $scope.menuList[i].canAdd = true;
            }
        }
    };

    $scope.cancelAdd = function (item) {
        for(var i = 0 ; i < $scope.menuList.length; i++) {
            if($scope.menuList[i].MenuId == item.MenuId) {
                $scope.menuList[i].canAdd = false;
            }
        }
    };

    $scope.canAddMainMenu = function () {
        $scope.canMainMenu = true;
    };

    $scope.cancelAddMainMenu = function () {
        $scope.canMainMenu = false;
    };

    /**
     * 新增小菜单
     * @param item
     */
    $scope.addMenu = function (item) {
        var params = {
            "MenuId": item.MenuId,
            "parentId": item.Id,
            "MenuName": item.menuName,
            "MenuUri": item.menuUrl,
            "MenuThumbnail": item.menuIcon
        };
        addByIdFromServer(params);

    };
    /**
     * 添加大菜单
     * @param mainMenu
     */
    $scope.addMainMenu = function (mainItem) {
        var params = {

            "parentId": 0,
            "MenuName": mainItem.mainMemuName,
            "MenuUri": mainItem.mainMemuUrl,
            "MenuThumbnail": mainItem.mainMemuIcon
        };
        addByIdFromServer(params);
    }

    /**
     * 从服务器上获取信息
     * @param params
     */
    function getMenuListByParentIdFromServer(params) {
        var defer = $q.defer();
        Network.post4Data({
            url: CONFIG.SERVER_ADDRESS + CONSTANT.API.GET_MENULIST,
            method: CONFIG.REQUEST_METHOD_GET,
            data: params,
            withCredentials: false,
            success: function (data) {
                if (data.respCode == CONSTANT.RESP_CODE.SUCCESS) {
                    $scope.menuList = data.data;
                    console.log($scope.menuList);
                } else {
                    alert(data.respMsg);
                }
            },
            fail: function (data) {
                alert(data.respMsg);
            }
        });
    }

    /**
     * 删除
     * @param params
     */
    function deleteByIdFromServer(params) {
        var defer = $q.defer();
        Network.post4Data({
            url: CONFIG.SERVER_ADDRESS + CONSTANT.API.DELETE_BY_ID,
            method: CONFIG.REQUEST_METHOD_POST,
            data: params,
            success: function (data) {
                if (data.respCode == CONSTANT.RESP_CODE.SUCCESS) {
                    alert(data.respMsg);
                } else {
                    alert(data.respMsg);
                }
            },
            fail: function (data) {
                alert(data.respMsg);
            }
        });
    }

    /**
     * 新增
     * @param params
     */
    function addByIdFromServer(params) {
        var defer = $q.defer();
        Network.post4Data({
            url: CONFIG.SERVER_ADDRESS + CONSTANT.API.ADD_MENU,
            method: CONFIG.REQUEST_METHOD_POST,
            data: params,
            success: function (data) {
                if (data.respCode == CONSTANT.RESP_CODE.SUCCESS) {
                    alert(data.respMsg);
                    location.reload();
                } else {
                    alert(data.respMsg);
                }
            },
            fail: function (data) {
                alert(data.respMsg);
            }
        });
    }

};