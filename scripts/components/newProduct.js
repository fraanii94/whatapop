/**
 * Created by fran on 15/6/16.
 */

angular.module("whatapop").component("newProduct", {

    bindings: {
        $router: "<"
    },
    templateUrl: "views/new-product.html",
    controller: function (ProductService) {

        var self = this;

        self.newProduct = function (name) {

            var product = {name : name};

            ProductService.newProduct(product).then(function (response) {

                self.$router.navigate(['Products']);

            })
        }
    }
    
});