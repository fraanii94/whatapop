/**
 * Created by fran on 14/6/16.
 */
angular.module("whatapop").service("CategoryService",function ($http) {


    this.getCategories = function () {

        return $http.get("http://localhost:8000/api/categories");

    };

});