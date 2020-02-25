
var amrPlayerService = require("./amrPlayerService.js");

var mod = angular.module("app.amrPlayerService", []);

mod.factory('amrPlayer',amrPlayerService);

module.exports = mod;
