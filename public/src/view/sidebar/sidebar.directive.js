/**
 * Created by Compt on 6/30/2016.
 */
(function(){

    angular
        .module('stuff')
        .directive('stuffSidebar', stuffSidebar);

    function stuffSidebar(){

        return {
            restrict: 'EA',
            templateUrl: "src/view/sidebar/sidebar.html",
            controllerAs: 'ul',
            controller: 'UserController',

        };

    }


})
