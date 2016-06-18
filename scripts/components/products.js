/**
 * Created by fran on 14/6/16.
 */
angular.module("whatapop").component("products", {

    bindings: {
        $router: "<"
    },
    templateUrl: "views/products.html",

    controller: function (ProductService,CategoryService,$filter,$sce) {

        var self = this;
        
        self.$routerOnActivate = function (next) {

            

            ProductService.getProducts().then(function (response) {
                if(next.params.searchText){
                    self.products = $filter("filter")(response.data,next.params.searchText);
                }else{
                    self.products = response.data;
                }

            });

            CategoryService.getCategories().then(function (response) {
                self.categories = response.data;
            });
        };
        


        
    }

});