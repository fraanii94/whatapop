/**
 * Created by fran on 14/6/16.
 */
angular.module("whatapop").directive("productForm",function () {

    return {
        restrict: "EA",
        templateUrl: "views/product-form.html",
        scope: {
            clickButton: "&"
        },
        
        link: function (scope) {

            scope.placeholderName = "Escribe nombre";
            
            scope.notifySave = function () {

                    scope.clickButton({ name: scope.name });

            };

            
        }
    };

});