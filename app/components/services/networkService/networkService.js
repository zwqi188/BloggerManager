module.exports = /*@ngInject*/function (globalService, $http, $state, CONSTANT, $httpParamSerializerJQLike) {
    "use strict";

    var ajax = {
        post4Data: post4Data
    };

    /**
     * 调用接口的公共方法
     * @param xhrConfig  包含各配置项
     *  data  根据服务端数据格式进行处理，此处为序列化（JQUERY可使用$.param）！！！watch here！！！
     *  method  get,post等
     *  always 接口成功后一定执行的函数
     *  success  接口成功后返回码是1000/2000/7001时，执行的函数
     *  fail  接口成功后返回码不是1000/2000/7001时，执行的函数
     *  error  接口返回失败时处理函数
     */
    var defaultConfig = {
        url: "",
        data: {},
        method: "post",
        headers: {
            // "Content-Type": "application/json"
            "Content-Type": "application/x-www-form-urlencoded"
        },
        withCredentials: false,
        always: angular.noop,
        success: angular.noop,
        fail: angular.noop,
        error:angular.noop
    };

    function post4Data (xhrConfig) {
        var customConfig = $.extend(true,{},defaultConfig, xhrConfig);
        
        $http({
            method: customConfig.method,
            url: customConfig.url,
            // data:  $.param(customConfig.data),
            data: $httpParamSerializerJQLike(customConfig.data),
            headers: customConfig.headers,
            withCredentials: false,
        }).success(function (data, status, header, config) {
            if (customConfig.always !== angular.noop) {
                customConfig.always(data);
            }

            if ((data.respCode == CONSTANT.RESP_CODE.SUCCESS) || (data.respCode == CONSTANT.RESP_CODE.ERROR_EMPTY) || (data.respCode == CONSTANT.RESP_CODE.SESSION_OUT)) {
                if (customConfig.success !== angular.noop) {
                    customConfig.success(data);
                }
            } else {
                if (customConfig.fail !== angular.noop) {
                    customConfig.fail(data);
                }
            }
        }).error(function (data, status, header, config) {

            if (customConfig.error !== angular.noop) {
                customConfig.error(data);
            }
        })
    }

    return ajax;
};