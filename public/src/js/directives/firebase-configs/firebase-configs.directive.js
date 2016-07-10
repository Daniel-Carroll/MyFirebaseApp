/**
 * Created by Compt on 7/3/2016.
 */
(function(){

    angular
        .module('stuff')
        .directive('firebaseConfigs', firebaseConfigs);

    function firebaseConfigs(){

        return {
            restrict: 'EA',
            templateUrl: "src/js/directives/firebase-configs/firebase-configs.html"
        };

    }


})();