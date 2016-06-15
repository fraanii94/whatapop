/**
 * Created by fran on 13/6/16.
 */

angular.module("whatapop").service("ProductService",function ($http) {

    this.getProducts = function () {


        return $http.get("http://localhost:8000/api/products");
        
    };

    this.newProduct = function (product) {

        return $http.post("http://localhost:8000/api/products",product);

    };

    this.search = function (searchText) {

        return new Promise(function () {
           console.log(searchText);
        });

    }

});