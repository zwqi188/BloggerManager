module.exports = function () {
    'use strict';
    var menu = {};
    menu.changeActiveClass = function (className) {
        $(".user").removeClass("active");
        $(".order").removeClass("active");
        $(".menu").removeClass("active");
        $(".spot").removeClass("active");
        $(".commont").removeClass("active");
        $("." + className).addClass("active");
    }
    return menu;
};