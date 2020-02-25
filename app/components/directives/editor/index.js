
var editorView = require("./editor.js");
require("./style.styl");

var mod = angular.module("app.editorView", []);
mod.directive("editorView", editorView);

module.exports = mod;
