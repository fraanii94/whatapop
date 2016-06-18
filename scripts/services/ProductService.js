/**
 * Created by fran on 13/6/16.
 */

angular.module("whatapop").service("ProductService",function ($http,$filter,Config) {

    var productUrl = Config.serverUrl + Config.productEndPoint;

    this.getProducts = function () {
            

        return $http.get(productUrl);
        
    };
    
    this.getOwnerProducts = function (owner) {
      
        return this.getProducts().then(function (response) {
            
            return $filter("filter")(response.data, {"seller": {"id": owner}});
        })
    };

    this.getProduct = function (id) {

        return this.getProducts().then(function (response) {
            return $filter("filter")(response.data, {"id": id})[0];
        });
    };

    this.newProduct = function (product) {

        return $http.post(productUrl,product);

    };

    this.getSource = function (source) {
        console.log(source);
        return source ? (Config.serverUrl + "/" +  source) : undefined;
    };

});