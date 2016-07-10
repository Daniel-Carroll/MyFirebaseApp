/**
 * Created by Compt on 7/9/2016.
 */
(function(){

    angular
        .module('stuff')
        .controller('myStuffController', [
            'ItemService', 'CategoryService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
            myStuffController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function myStuffController( itemService, categoryService, $mdSidenav, $mdBottomSheet, $timeout, $log  ) {

        

    }

})();