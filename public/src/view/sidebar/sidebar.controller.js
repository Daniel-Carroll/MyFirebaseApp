/**
 * Created by Compt on 7/1/2016.
 */
(function() {

    angular
        .module('stuff')
        .controller('SidebarController', [SidebarController]);

    function SidebarController() {
        var sidebar= this;
        sidebar.sortCategories = ["Category", "Item"];


    }

})();