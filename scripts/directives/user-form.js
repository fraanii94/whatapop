/**
 * Created by fran on 17/6/16.
 */
angular.module("whatapop").directive("userForm",function () {

    return {
        restrict: "EA",
        templateUrl: "views/user-form.html",
        scope: {
            "clickSave": "&"
        },
        link: function (scope) {

            scope.notifySave = function () {
                var user = {};
                scope.clickSave({user: user});

            }

        }
    }

});