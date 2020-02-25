var sexFilter= require("./sexFilter.js"),
    roleFilter= require("./roleFilter.js");

var mod = angular.module("app.filters", []);

mod.filter("sexFilter",sexFilter);
mod.filter("roleFilter",roleFilter);

module.exports = mod;