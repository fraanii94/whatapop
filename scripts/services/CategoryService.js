/**
 * Created by fran on 14/6/16.
 */
angular.module("whatapop").service("CategoryService",function ($http,Config) {

    var categoryUrl = Config.serverUrl + Config.categoryEndPoint;

    this.getCategories = function () {

        return $http.get(categoryUrl);

    };

});