module.exports = /*@ngInject*/function (CONFIG, CONSTANT,$http, $q, Network, NgTableParams, $filter, $scope, loginService, $state, Util,MenuService) {
    'use strict';
    document.body.scrollTop = 0;
    var vm = this;

    $scope.uploadList = [];
    $scope.imageServe = CONFIG.SERVER_ADDRESS;

    init(); //页面初始化函数

    function init(){
        MenuService.changeActiveClass("spot");
        if(CONFIG.MOCK_UPLOAD) {
            $scope.uploadList.push("3.jpg?1");
            $scope.uploadList.push("3.jpg?2");
            $scope.uploadList.push("3.jpg?3");
            $scope.uploadList.push("3.jpg?4");
            $scope.uploadList.push("3.jpg?5");
        }
    };

    $scope.cancelUpload = function (index) {
        $scope.uploadList.splice(index,1);
    };

    $scope.uploadPic = function () {
        if(CONFIG.MOCK_UPLOAD) {
            //模拟上传
            $scope.uploadList.push("3.jpg?" + Math.random());
        } else {
            //真实上传

        }

    };

    $scope.addSpotToServer = function () {
          var editorHtml = $("#editor").html();
          var param = {
              "spotName":$scope.spotName,
              "cityId":$scope.cityId,
              "price":$scope.price,
              "spotImg":JSON.stringify($scope.uploadList),
              "spotDesc":editorHtml
          };
        getFromServer(param);

    };

    function getFromServer(params) {
        Network.post4Data({
            url: CONFIG.SERVER_ADDRESS + CONSTANT.API.ADD_SPOT,
            method: CONFIG.REQUEST_METHOD_POST,
            data: params,
            success: function (data) {
                if (data.respCode == CONSTANT.RESP_CODE.SUCCESS) {
                    alert(data.respMsg);
                    return;
                }
                alert(data.respMsg);
            },
            fail: function (data) {
                alert(data.respMsg);
            }
        });
    }


    /**
     * 上传接口
     */
    $scope.upload = function() {
        var img = document.querySelector('input[type=file]').files[0];
        var fd = new FormData();
        fd.append('issueId', '1');
        fd.append('file', img);
        $http.post(CONFIG.SERVER_ADDRESS + CONSTANT.API.UPLOAD_IMAGE, fd, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        }).success(function (response) {
            if(response.respCode == CONSTANT.RESP_CODE.SUCCESS) {
                $scope.uploadList.push(response.data);
                alert(response.respMsg);
                return;
            }
            alert(response.respMsg);
        }).error(function(response) {
            alert(response.respMsg);
        });
    };
};