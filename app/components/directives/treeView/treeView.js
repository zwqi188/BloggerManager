module.exports = /*@ngInject*/function ($rootScope) {
    "use strict";
    return {
        restrict: "EA",
        priority: 0,
        templateUrl: require("file!./template.html"),
        link: function (scope, element, attr, ctrl) {
            document.querySelectorAll(".tree-view")[0].addEventListener('touchmove', function (event) {
                event.preventDefault();
            }, false);
        }
    }
};
