var bootService = require("./bootService.js");

var mod = angular.module("app.bootService", []);

mod.run(bootService);

module.exports = mod;