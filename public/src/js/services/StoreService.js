(function(){
  'use strict';

  angular.module('users')
         .service('storeService', ['$q', StoreService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function StoreService($q){
    var stores = [
      {
        storeNumber: '699'
      },
      {
        storeNumber: '623'
      },
      {
        storeNumber: '694'
             },
      {
        storeNumber: '666'
              },
      {
        storeNumber: '654'
              },
      {
        storeNumber: '109'
              }
    ];



    // Promise-based API
    return {
      loadAllStores : function() {
        // Simulate async nature of real remote calls
        return $q.when(stores);
      }
    };
  }

})();
