module.exports = /*@ngInject*/function ($rootScope, $http, $window, $state, CONFIG, CONSTANT, globalService, $timeout) {
    "use strict";

    var ajax = {};

    ajax.post4Data = function (url, params, method, callBack, errorFun) {
        $http({
            method: method,
            url: url,
            data: $.param(params),
            headers: {"Content-Type": "application/json"},
            withCredentials: false
        }).success(function (data, status, header, config) {
            if (data.respCode == CONSTANT.RESP_CODE.SUCCESS) {
                callBack(data, status, header, config);
            }else if(data.respCode == CONSTANT.RESP_CODE.ERROR_EMPTY){
                alert(data.respCode+":"+data.respMsg);
            } else if(data.respCode == CONSTANT.RESP_CODE.MG_UID_ERROR){
                $window.location.href = CONFIG.SERVER_ADDRESS + CONSTANT.SSO.LOGIN;
            } else {
                alert(data.respCode+":"+data.respMsg);
            }
        }).error(function (data, status, header, config) {
            alert("请求超时! 请联系管理员");
        });
    };


    return ajax;
};