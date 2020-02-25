var networkService = require("./networkService.js");

var mod = angular.module("app.networkService", []);

mod.factory("Network",networkService);

module.exports = mod;