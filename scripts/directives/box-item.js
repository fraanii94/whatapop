/**
 * Created by fran on 15/6/16.
 */
angular.module("whatapop").directive("boxItem",function () {

    return {
        restrict: "EA",
        templateUrl: "views/box-item.html",
        scope: {
            clickItem: "&",
            item: "<"
        }
    };

});