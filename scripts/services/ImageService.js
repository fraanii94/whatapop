/**
 * Created by fran on 17/6/16.
 */

angular.module("whatapop").service("ImageService",function ($http,Config) {

    var imageUrl = Config.serverUrl + Config.endPointUploads;

    this.upload = function (file) {
        console.log(file);
        var fd = new FormData();
        fd.append('img', file);
        var config = {
            "headers": {
                "Content-Type": undefined
            }
        };
        return $http.post(imageUrl,fd,config);

    }

});