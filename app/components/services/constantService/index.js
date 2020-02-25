var constantService = require('./constantService.js');

var mod = angular.module('app.constantService', []);
mod.constant('CONSTANT', constantService);

module.exports = mod;


