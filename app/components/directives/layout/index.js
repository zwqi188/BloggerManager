require('./style.styl');
var layoutDirective = require('./layoutDirective.js');
var mod = angular.module('app.layout', []);

mod.directive('layout', layoutDirective);
module.exports = mod;
