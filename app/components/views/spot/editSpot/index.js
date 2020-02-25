var ctrlName = 'editSpot';
var ctrl = require('./' + ctrlName + 'Ctrl.js');
require('./style.styl');
var mod = angular.module('app.' + ctrlName, ['ngTable', 'ngSanitize']);
mod.controller(ctrlName + 'Ctrl', ctrl);

module.exports = mod;