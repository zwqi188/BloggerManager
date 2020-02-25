module.exports = /*@ngInject*/function (CONFIG, CONSTANT, $q, Network, NgTableParams, $filter, $scope, MenuService) {
    init();
    function init() {
        MenuService.changeActiveClass("spot");
    }
};