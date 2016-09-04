(function(){
  'use strict';

  angular.module('stuff')
         .service('CategoryService', CategoryService);


  CategoryService.$inject = ['$http'];
  function CategoryService($http){

    var service = {
      getAllCollections: getAllCollections
    };
    return service;

      function getAllCollections(){
        return $http.get("stuff_api/api/collections")
            .then(getCollectionsComplete)
            .catch(getCollectionsFailed);

        function getCollectionsComplete(response){
          return response.data;
        }
        function getCollectionsFailed(err){
          console.log(err.data);
        }

      }


  }

})();
