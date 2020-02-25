var globalService = require("./globalService.js");

var mod = angular.module("app.globalService", []);

mod.service('globalService', globalService);

module.exports = mod;