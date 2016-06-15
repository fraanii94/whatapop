/**
 * Created by fran on 14/6/16.
 */
angular.module("whatapop").component("products", {


    templateUrl: "views/products.html",

    controller: function (ProductService) {

        var self = this;
        
        self.$onInit = function () {
            
            ProductService.getProducts().then(function (response) {
                self.products = response.data;
            });
        };

        self.openDetail = function (id) {

            console.log(id);
            self.$router.navigate(['Products']);
            
        }
        
    }

});