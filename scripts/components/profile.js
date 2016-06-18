
angular.module("whatapop").component("profile",{
   
   bindings: {
       $router: "<"
   },
   templateUrl: "views/profile.html",
   
   controller: function(UserService,CategoryService,ProductService,$q){
       
       var self = this;
       self.user = {};
       self.user.latitude = 0;
       self.user.longitude = 0;
       self.$routerOnActivate = function (next) {


           self.getSource = ProductService.getSource;
           
           
           $q.all([
              UserService.getUser(next.params.id).then(function(user){
                  
                  self.user = user;
               
              }),
              CategoryService.getCategories().then(function(response) {
                  
                  self.categories = response.data;
              }),
              ProductService.getOwnerProducts(next.params.id).then(function(products) {
                  
                  self.products = products;
              })
           ]);
           
       }
       
   }
    
});