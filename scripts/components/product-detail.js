/**
 * Created by fran on 16/6/16.
 */


angular.module("whatapop").component("productDetail", {

    bindings: {
        $router: '<'
    },
    templateUrl: "views/product-detail.html",

    controller: function (ProductService,UserService,$sce) {
        
        var self = this;
        self.center = [0,0];
        self.zoom = 14;
            
        self.$routerOnActivate = function (next) {
            

            var id = next.params.id;

            ProductService.getProduct(id).then(function (product) {

                self.product = product;
                self.description = $sce.trustAsHtml(self.product.description);
                UserService.getUser(product.seller.id).then(function (user) {

                    self.user = user;

                    
                        self.center = [self.user.latitude, self.user.longitude ];
                        self.zoom = 14;
                    

                });
            });
        };
        
        self.back = function(){
            self.$router.navigate(['Products']);
        }
    }
});