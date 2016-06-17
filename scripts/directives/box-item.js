/**
 * Created by fran on 15/6/16.
 */
angular.module("whatapop").directive("boxItem",function ($sce,$filter) {

    return {
        restrict: "EA",
        templateUrl: "views/box-item.html",
        scope: {
            clickItem: "&",
            item: "<"
        },
        
        link: function (scope) {
            scope.description = $sce.trustAsHtml($filter('textLimiter')(scope.item.description));
        }
    };

});