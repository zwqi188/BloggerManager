
/*
 * 判断浏览器系统
 * @ return {{webkit: boolean, android: boolean, androidICS: boolean, android2: boolean, ipad: boolean, iphone: boolean, ios: boolean, wphone: boolean, firefox: boolean}}
 */
var userAgent = navigator.userAgent;
var OS = {
    webkit: userAgent.match(/WebKit\/([\d.]+)/) ? true : false,
    android: userAgent.match(/(Android)\s+([\d.]+)/) || userAgent.match(/Silk-Accelerated/) ? true : false,
    androidICS: this.android && userAgent.match(/(Android)\s4/) ? true : false,
    android2: userAgent.match(/(Android)\s2/i) ? true : false,
    androidFF: userAgent.match(/Android/i) ? true : false,
    ipad: userAgent.match(/(iPad).*OS\s([\d_]+)/) ? true : false,
    iphone: !(userAgent.match(/(iPad).*OS\s([\d_]+)/) ? true : false) && userAgent.match(/(iPhone\sOS)\s([\d_]+)/) ? true : false,
    ios: (userAgent.match(/(iPad).*OS\s([\d_]+)/) ? true : false) || (!(userAgent.match(/(iPad).*OS\s([\d_]+)/) ? true : false) && userAgent.match(/(iPhone\sOS)\s([\d_]+)/) ? true : false),
    wphone: userAgent.match(/Windows Phone/i) ? true : false,
    firefox: userAgent.match(/Firefox/i) ? true : false,
    UCBrowser: userAgent.match(/(UCBrowser)|(UCWeb)/g) ? true : false,
    weixin: userAgent.match(/MicroMessenger/i) ? true : false
};

var cmbAgent = userAgent.match(/\(cmblife\s(\S*)\/(\S*)\sv[2-9]\)/);
if (cmbAgent) {
    OS.cmblifeUP48 = cmbAgent[2] >= 48;
} else {
    OS.cmblifeUP48 = false;
}


var iosAgent = userAgent.match(/OS\s(\S*?)_.*\slike Mac OS X/i);
if (iosAgent) {
	OS.iosUP9 = iosAgent[1] >= 9;
} else {
	OS.iosUP9 = false;
}

var CONSTANT = {
    OS:OS,

    STR:{
        MENU_ID:"1002961000",
    },

    SSO:{
        LOGOUT: "manage/logout.json",
        GET_UID: "manage/getUid.json",
        GET_MENU_LIST: "manage/getMenuList.json"
    },

    API: {
        //在此处添加请求接口的地址
        GET_MSG:"getMsg.json",
        PQ_GET_PAY_ORDER:"mgr/getPayGwOrder.json",
        PQ_GET_PAYMENT_DETAIL:"mgr/getPayGwPayment.json",
        GET_MENULIST:"manage/getMenuList.json",
        DELETE_BY_ID:"manage/deleteByUserId.json",
        ADD_MENU:"manage/addMenu.json",
        GET_USERINFO_BY_CONDITION:"manage/getUserInfoByAccount.json",
        UPLOAD_IMAGE:"manage/uploadImg.json",
        ADD_SPOT:"manage/addSpot.json"

    },

    RESP_CODE: {
        SUCCESS: '1000',
        ERROR: '1001',
        ERROR_EMPTY: '2000',
        SESSION_OUT: "7001",
        MG_UID_ERROR: '0999'             //获取用户Id异常;获取授权菜单异常
    },
    
    IDENTITY_REG: {//身份证验证 正则 
        REG_IDENTITY15: /^[1-9](\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3})$/,
        REG_IDENTITY18: /^[1-9](\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x))$/,
        REG_IDENTITY_HIDE15: /^[1-9][0-9](\*{12})(\d|X|x)$/,
        REG_IDENTITY_HIDE18: /^[1-9][0-9](\*{15})(\d|X|x)$/,
    }
};


module.exports = CONSTANT;