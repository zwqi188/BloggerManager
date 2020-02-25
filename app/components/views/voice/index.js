
var voiceCtrl = require('./voiceCtrl.js');
require('combine-arm.js');

require('./style.styl');
var mod = angular.module('app.voice',  []);
mod.controller('voiceCtrl', voiceCtrl);

module.exports = mod;