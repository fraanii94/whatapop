/**
 * Created by fran on 17/6/16.
 */
angular.module("whatapop").component("signup",{

    bindings: {
        $router: "<"
    },
    templateUrl: "views/signup.html",

    controller: function (UserService,ImageService) {

        
        var self = this;
        
        self.saveUser = function (data) {
            console.log("data",data);
                
            ImageService.upload(data.avatar).then(function (response) {

                var user = data;
                console.log(response);
                user.avatar = response.data.path;

                UserService.newUser(user).then(function (response) {


                    self.$router.navigate(['UserProfile',{id: response.data.id}]);


                });

            });
        }
        
    }





});