/**
 * Created by fran on 14/6/16.
 */

angular.module("whatapop").service('UserService',function ($http,$filter) {


    this.getUsers = function () {

        return $http.get("http://localhost:8000/api/users");

    };

    this.getUser = function (id) {

        this.getUsers().then(function (response) {
            return $filter("filter")(response.data,{id:id})[0];
        });
    };

});