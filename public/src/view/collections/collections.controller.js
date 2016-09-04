/**
 * Created by Compt on 7/9/2016.
 */
(function(){

    angular
        .module('stuff')
        .controller('myStuffController', myStuffController);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    myStuffController.$inject = ['ItemService', 'CategoryService', '$log']
    function myStuffController( ItemService, CategoryService, $log) {
        var self = this;

        self.collections = [];
        self.items = [];

        self.selectCollection = selectCollection;
        self.selectedCollection = null;
        self.selectItem = selectItem;
        self.selectedItem = null;

        self.selected = null;
        self.selectList = function(item){
            self.selected = item;
        }

        activate();

        function activate(){
            return getAllCollections().then(function(){
               console.log('Collections Loaded')
            });

        }

        function getAllCollections(){
            return CategoryService.getAllCollections()
                .then(function(data) {
                    self.collections = data;
                    return self.collections;
                });
        }

        function getAllItems(){
            return ItemService.getAllItems()
                .then(function(data){
                   self.items = data;
                   return self.items;
                });
        }

        function selectItem( item ){
            self.selectedItem = item;
        }
        function selectCollection( collection ){
            self.selectedCollection = collection;
        }

        
    }

})();