/**
 * Created by fran on 13/6/16.
 */

angular.module("whatapop").service("ProductService",function ($http,$filter) {

    this.getProducts = function () {


        return $http.get("http://localhost:8000/api/products");
        
    };

    this.getProduct = function (id) {

        return this.getProducts().then(function (response) {
            return $filter("filter")(response.data, {"id": id})[0];
        });
    };

    this.newProduct = function (product) {

        return $http.post("http://localhost:8000/api/products",product);

    };

});