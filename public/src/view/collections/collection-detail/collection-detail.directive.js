/**
 * Created by Compt on 7/23/2016.
 */
(function(){

    angular
        .module('stuff')
        .directive('collectionDetails', collectionDetails );

    function collectionDetails(){

        return {
            restrict: 'E',
            templateUrl: "src/view/collections/collection-detail/collection-detail.html"
        };

    }


})();