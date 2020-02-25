
/**
 * 整个应用加载之前,注册一些客户端功能,并统一处理页面跳转逻辑
 */

module.exports = function (globalService, $rootScope, CONSTANT, $window) {

	$window.onpopstate = function () {//浏览器前进或后退触发，关闭弹窗和loading
	};


     //处理一些特定跳转逻辑,比如拦截某些地址等等
		// $locationChangeStart地址栏发生变化时
	$rootScope.$on('$locationChangeStart', function (event) {
	});
	
		//$stateChangeStart state发生变化时
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
	});
};