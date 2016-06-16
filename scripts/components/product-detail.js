/**
 * Created by fran on 16/6/16.
 */


angular.module("whatapop").component("productDetail", {

    bindings: {
        $router: '<'
    },
    templateUrl: "views/product-detail.html",

    controller: function (ProductService) {
        
        var self = this;

        self.$routerOnActivate = function (next) {

            var id = next.params.id;
            
            ProductService.getProduct(id).then(function (product) {
                self.product = product;
            })

        };

    }
    
});