
var treeView = require("./treeView.js");
require("./style.styl");

var mod = angular.module("app.treeView", []);
mod.directive("treeView", treeView);

module.exports = mod;
