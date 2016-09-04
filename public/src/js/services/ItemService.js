(function(){
  'use strict';

  angular.module('stuff')
         .service('ItemService', ItemService);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */

  ItemService.$inject = ['$http']
  function ItemService($http){

    var service = {
      getAllItems: getAllItems
    }
    return service;

    function getAllItems(){
      return $http.get('stuff_api/api/items')
          .then(getItemsComplete)
          .catch(getItemsFailed);

      function getItemsComplete(response){
        console.log(response.data);
        return response.data;
      }
      function getItemsFailed(err){
        console.log(err.data);
      }
    }

  }

})();
