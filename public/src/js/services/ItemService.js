(function(){
  'use strict';

  angular.module('stuff')
         .service('itemService', ['$q', ItemService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function ItemService($q){
    var users = [
      {
        "name": "Goku Pop Vinyl",
        "description": "Rare pop vinyl straight from the top shelf of Hot Topic",
        "worth": 62.0747,
        "qty": 1,
        "category": "adb"
      },
      {
        "name": "Air Yeezy Shoes",
        "description": "Shoes I copped in honor of our lord and savior Yeezus Christ",
        "worth": 95.8689,
        "qty": 1,
        "category": "tag_faces"
      },
      {
        "name": "Dell XPS 13",
        "description": "Best computer ever made",
        "worth": 1000.56,
        "qty": 1,
        "category": "laptop"
      },
      {
        "name": "Whataburger Fancy Ketchup",
        "description": "Delicious Ketchup",
        "worth": 4.8134,
        "qty": 10,
        "category": "photo"
      },
      {
        "name": "Honda Odyssey",
        "description": "My hot rod",
        "worth": 25000.45,
        "qty": 1,
        "category": "directions_car"
      },
      {
        "name": "Starbucks Gift Cards",
        "description": "I need to use these bad boys",
        "worth": 25,
        "qty": 3,
        "category": "credit_card"
      }

    ];

    // Promise-based API
    return {
      loadAllItems : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
