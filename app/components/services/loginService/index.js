var loginService = require("./loginService.js");

var mod = angular.module("app.loginService", []);

mod.factory("loginService",loginService);

module.exports = mod;