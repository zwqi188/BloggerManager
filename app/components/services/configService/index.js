
var configService;

if (__ENV__ == "sit") {
    configService = require("./sitService.js");
} else if (__ENV__ == "uat") {
    configService = require("./uatService.js");
} else if (__ENV__ == "pro") {
    configService = require("./proService.js");
} else {
    configService = require("./devService.js");
}

var mod = angular.module("app.configService", []);
mod.constant("CONFIG", configService);
module.exports = mod;


