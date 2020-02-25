
module.exports = /*@ngInject*/function (CONFIG, CONSTANT, $q, Network, $window, $scope, amrPlayer) {
    'use strict';
    document.body.scrollTop = 0;
    var vm = this;
    vm.playAndPause = playAndPause;//语音播放与暂停
    var audioPlayer = $('#audioPlayer')[0];//语音播放器
    $scope.activeMsgId = -1;//活跃语音id记录

    init();

    function init() {
        getVoiceInfo();
    }

    /**
     * @method getVoiceInfo
     * @describe 获取对话数据
     */
    function getVoiceInfo() {
        Network.post4Data({
            url: CONFIG.SERVER_ADDRESS + CONSTANT.API.GET_MSG,
            method: "get",
            success: function (data) {
                vm.msgList = data.data.msgList;
            }
        });
    }


    /**
     * @method playAndPause
     * @describe 播放或暂停语音
     */
    function playAndPause(sourceUrl, msgId) {
        if(!audioPlayer || !sourceUrl) return;

        audioPlayer.pause();//暂停当前播放语音
        if($scope.activeMsgId === msgId){
            $scope.activeMsgId = -1;
            return
        }

        $scope.activeMsgId = msgId;
        amrPlayer.play(sourceUrl, "audioPlayer");
    }

    /**
     * @method voiceEnd
     * @describe 监听播放器的end事件，将活跃语音置为-1；目前angular不支持无此函数，只能绑定在window下
     */
    $window.voiceEnd = function(){
        $scope.activeMsgId = -1;//未监听暂停动作是因为监听函数对activeMediaId赋值有时间差，导致不准确
        $scope.$apply("activeMsgId");//强制更新 模板与视图 数据一致
    };
}