/**
 * Created by fran on 16/6/16.
 */
angular.module("whatapop").filter("textLimiter", function($sce){

    return function(text){

        var limitedText = text.substr(0,200);

        return limitedText.substr(0, limitedText.lastIndexOf(" "))+'...';

    }

});