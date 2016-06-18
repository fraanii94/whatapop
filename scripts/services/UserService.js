/**
 * Created by fran on 14/6/16.
 */

angular.module("whatapop").service('UserService',function ($http,$filter,Config) {

    var userUrl = Config.serverUrl + Config.userEndPoint;

    this.getUsers = function () {

        return $http.get(userUrl);

    };

    this.getUser = function (id) {

        return this.getUsers().then(function (response) {

            return $filter("filter")(response.data,{id:id})[0];

        });
    };

    this.newUser = function (user) {

        console.log(user);

        return $http.post(userUrl,user);

    }

});