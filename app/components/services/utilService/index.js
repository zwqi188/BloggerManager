var utilService = require("./utilService.js");

var mod = angular.module("app.utilService", []);

mod.factory("Util", ["CONSTANT", utilService]);

module.exports = mod;