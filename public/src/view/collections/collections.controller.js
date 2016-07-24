/**
 * Created by Compt on 7/9/2016.
 */
(function(){

    angular
        .module('stuff')
        .controller('myStuffController', [
            'ItemService', 'CategoryService', '$log',
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
        var self = this;

        self.categories = [];
        self.items = [];
        self.selectCategory = selectCategory;
        self.selectedCategory = null;
        self.selectItem = selectItem;
        self.selectedItem = null;

        self.selected = null;
        self.selectList = function(item){
            self.selected = item;
        }

        itemService
            .loadAllItems()
            .then( function(items){
                self.items = [].concat(items);
        })
        categoryService
            .loadAllCategories()
            .then(function( categories){
                self.categories = [].concat(categories);
            })

        function selectItem( item ){
            self.selectedItem = item;
        }
        function selectCategory( category ){
            self.selectedCategory = category;
        }
        function addCategory(){

        }
        
    }

})();