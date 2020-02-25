module.exports = function (app) {
    'use strict';
    app.config(/*@ngInject*/function ($stateProvider, $urlRouterProvider, $locationProvider, CONSTANT) {

        // $urlRouterProvider.otherwise('/home');//该地址下所有未注册的state，都跳转到home
        $urlRouterProvider.when("/tab", "/tab/charts");//通过这种方式可以实现链接的重定向
        $locationProvider.html5Mode(false);
        $stateProvider
            .state('menu', {
                url: '/menu',
                templateUrl: require('file!../views/menu/template.html'),
                controller: 'menuCtrl',
                controllerAs: 'Menu',
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var mod = require('views/menu');
                        $ocLazyLoad.load({
                            name: mod.name
                        });

                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            })
            .state('menu.menuConfig', {
                url: '/menuConfig',
                templateUrl: require('file!../views/menu/menuConfig/template.html'),
                controller: 'menuConfigCtrl',
                controllerAs: '$ctrl',
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var mod = require('views/menu/menuConfig');
                        $ocLazyLoad.load({
                            name: mod.name
                        });

                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            })
            .state('user', {
                url: '/user',
                templateUrl: require('file!../views/user/template.html'),
                controller: 'userCtrl',
                controllerAs: 'user',
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var mod = require('views/user');
                        $ocLazyLoad.load({
                            name: mod.name
                        });

                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            })
            .state('user.regUserManager', {
                url: '/regUserManager',
                templateUrl: require('file!../views/user/regUserManager/template.html'),
                controller: 'regUserManagerCtrl',
                controllerAs: '$ctrl',
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var mod = require('views/user/regUserManager');
                        $ocLazyLoad.load({
                            name: mod.name
                        });

                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            })
            .state('spot', {
                url: '/spot',
                templateUrl: require('file!../views/spot/template.html'),
                controller: 'spotCtrl',
                controllerAs: 'spot',
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var mod = require('views/spot');
                        $ocLazyLoad.load({
                            name: mod.name
                        });

                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            })
            .state('spot.addSpot', {
                url: '/addSpot',
                templateUrl: require('file!../views/spot/addSpot/template.html'),
                controller: 'addSpotCtrl',
                controllerAs: '$ctrl',
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var mod = require('views/spot/addSpot');
                        $ocLazyLoad.load({
                            name: mod.name
                        });

                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            })
            .state('spot.editSpot', {
                url: '/editSpot',
                templateUrl: require('file!../views/spot/editSpot/template.html'),
                controller: 'editSpotCtrl',
                controllerAs: '$ctrl',
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var mod = require('views/spot/editSpot');
                        $ocLazyLoad.load({
                            name: mod.name
                        });

                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            })
            .state('test', {
                url: '/test',
                templateUrl: require('file!../views/test/template.html'),
                controller: 'testCtrl',
                controllerAs: 'Test',
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var mod = require('views/test');
                        $ocLazyLoad.load({
                            name: mod.name
                        });

                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            })
            .state('test.test01', {
                url: '/test01',
                templateUrl: require('file!../views/test/test01/template.html'),
                controller: 'test01Ctrl',
                controllerAs: '$ctrl',
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var mod = require('views/test/test01');
                        $ocLazyLoad.load({
                            name: mod.name
                        });

                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            })

        ;
    });
};