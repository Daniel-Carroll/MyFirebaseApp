/**
 * Created by Compt on 7/23/2016.
 */
(function(){

    angular
        .module('stuff')
        .directive('itemDetails', itemDetails );

    function itemDetails(){

        return {
            restrict: 'E',
            templateUrl: "src/view/collections/item-detail/item-detail.html",
            link: link
        };


        function link(scope, elem, attrs){
            var self = scope.self;

            //Item related functions can reside here

        }
    }


})();