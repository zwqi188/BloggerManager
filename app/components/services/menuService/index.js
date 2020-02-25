var utilService = require("./menuService.js");

var mod = angular.module("app.menuService", []);

mod.factory("MenuService", ["CONSTANT", utilService]);

module.exports = mod;