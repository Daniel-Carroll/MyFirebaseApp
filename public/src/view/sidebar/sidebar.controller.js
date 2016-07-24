/**
 * Created by Compt on 7/1/2016.
 */
(function() {

    angular
        .module('stuff')
        .controller('SidebarController', [SidebarController]);

    function SidebarController() {
        var sidebar= this;
        sidebar.sort="Item"
        sidebar.sortCategories = ["Category", "Item"];

        sidebar.sitePages = [
            {
                "name": "Home",
                "state": "home",
                "icon": "home"
            },
            {
                "name": "Collections",
                "state": "collections",
                "icon": "dashboard"
            },
            {
                "name": "Notes",
                "state": "world-stuff",
                "icon": "public"
            }

        ]


    }

})();