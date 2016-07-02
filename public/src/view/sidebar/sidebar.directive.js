/**
 * Created by Compt on 6/30/2016.
 */
(function(){

    angular
        .module('stuff')
        .directive('sidebarList', sidebarList);

    function sidebarList(){

        return {
            restrict: 'EA',
            templateUrl: "src/view/sidebar/sidebar-list.html"
        };

    }


})();
