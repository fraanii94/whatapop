/**
 * Created by fran on 15/6/16.
 */
angular.module("whatapop").component("root",{

    $routeConfig: [{

        name: "Signup",
        path: "/signup",
        component: "signup"
    },{
        name: "Users",
        path: "/users",
        component: "users"
    },{
        name: "UserProfile",
        path: "/users/:id",
        component: "profile"

    },{
        name: "Products",
        path: "/products",
        component: "products",
        useAsDefault: true
    },{
        name: "ProductDetail",
        path: "products/:id",
        component: "productDetail"
    }, {
        name: "NewProduct",
        path: "/products/new",
        component: "newProduct"
    }],
    templateUrl: "views/root.html"

});