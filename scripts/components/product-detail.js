/**
 * Created by fran on 16/6/16.
 */


angular.module("whatapop").component("productDetail", {

    bindings: {
        $router: '<'
    },
    templateUrl: "views/product-detail.html",

    controller: function (ProductService,UserService) {
        
        var self = this;

        self.$routerOnActivate = function (next) {

            var id = next.params.id;

            ProductService.getProduct(id).then(function (product) {

                self.product = product;

                UserService.getUser(product.seller.id).then(function (user) {

                    self.user = user;

                    self.map = {
                        center: [self.user.latitude, self.user.longitude ],
                        zoom: 14
                    };

                });
            });
        };
    }
});