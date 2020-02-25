module.exports = /*@ngInject*/function (CONFIG, CONSTANT, $window, loginService, globalService, $rootScope, Network) {
    'use strict';
    return {
        restrict: 'A',
        priority: 0,
        replace: true,
        scope: {
            userId: "=",
            showSlide: "="
        },
        templateUrl: require("file!./template.html"),
        link: function (scope, element, attrs) {

            scope.data = globalService.data;

            scope.login = function login() {
                $window.location.href = CONFIG.SERVER_ADDRESS + CONSTANT.SSO.LOGIN;
            };

            scope.logout = function logout() {
                $window.sessionStorage.clear();
                $window.location.href = CONFIG.SERVER_ADDRESS + CONSTANT.SSO.LOGOUT;
            };

            getUid();

            $rootScope.$on('travel.menuListChanged', function () {
                //获取菜单列表
                var getMenuListUrl = CONFIG.SERVER_ADDRESS + CONSTANT.SSO.GET_MENU_LIST;
                var method = CONFIG.REQUEST_METHOD_GET;
                var params = {
                    resourceId: CONSTANT.STR.MENU_ID
                };
                getMenuList(getMenuListUrl, method, params, scope);
            });

            $rootScope.$on('travel.userIdChanged', function () {
                globalService.userId = $window.sessionStorage.getItem("travel_userId");
            });

        }
    };

    //获取uid
    function getUid() {

        var url = CONFIG.SERVER_ADDRESS + CONSTANT.SSO.GET_UID;
        var method = CONFIG.REQUEST_METHOD_GET;

        loginService.post4Data(url, {}, method, function (data) {
            $window.sessionStorage.setItem("travel_userId", data.data);
            $rootScope.$emit('travel.userIdChanged');
            $rootScope.$emit('travel.menuListChanged');
        });
    }

    //获取menulist
    function getMenuList(url, method, params, scope) {
        Network.post4Data({
            url: url,
            method: method,
            data: params,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (data) {
                if (data.respCode == CONSTANT.RESP_CODE.SUCCESS) {
                    scope.data = data.data;
                }
            }
        });
    }

};

