/**
 * Created by Compt on 7/1/2016.
 */
(function(){

    angular
        .module('stuff')
        .directive('test', test );

    function test(){

        return {
            restrict: 'E',
            templateUrl: "src/js/directives/test.html"
        };

    }


})();