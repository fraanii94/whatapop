/**
 * Created by fran on 9/6/16.
 */

angular.module("whatapop",["ngComponentRouter",'GoogleMapsNative']);

angular.module("whatapop").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

angular.module("whatapop").value("$routerRootComponent","root");