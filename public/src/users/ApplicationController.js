(function(){

  angular
       .module('stuff')
       .controller('AppController', [
          'itemService', 'CategoryService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
           AppController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function AppController( userService, storeService, $mdSidenav, $mdBottomSheet, $timeout, $log  ) {
    var self = this;

    self.selected     = null;
    self.items        = [ ];
    self.categories       = null;
    self.selectedCategory= null;
    self.selectItem   = selectItem;
    self.toggleList   = toggleUsersList;
    self.makeContact  = makeContact;
    self.change       = false;

    // Load all registered users

    userService
          .loadAllItems()
          .then( function( items ) {
            self.items    = [].concat(items);
            self.selected = items[0];
          });

    storeService
        .loadAllCategories()
        .then( function( category ){
          self.categories = [].concat(category);
          self.selectedCategory = category[0].name;
        })

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    /**
    * Set global Store variable
    */
    function  changeStore () {

    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectItem ( user ) {
      self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact(selectedUser) {

        $mdBottomSheet.show({
          controllerAs  : "vm",
          templateUrl   : './src/users/view/contactSheet.html',
          controller    : [ '$mdBottomSheet', ContactSheetController],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
          this.user = selectedUser;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.contactUser = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
