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

            scope.user = {};

            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function (data) {

                    scope.user.latitude = data.coords.latitude;
                    scope.user.longitude = data.coords.longitude;



                },function () {

                    alert("En un futuro podría ser necesario su posición");

                });
            }

            scope.onImageSelected = function(file) {
                scope.user.avatar = file;
            };

            scope.notifySave = function () {
                if(scope.sign.$valid){
                    scope.user.name = scope.name;
                    scope.user.nick = scope.nick;
                    scope.user.email = scope.email;

                    scope.clickSave({user: scope.user});
                }




            };


        }
    }
});