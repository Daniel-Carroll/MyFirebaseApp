(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular
      .module('stuff', [ 'ngMaterial', 'ui.router' ])
      .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home',{
              url:'/home',
              templateUrl: "src/view/home/home.html"
            })
            .state('my-stuff',{
              url:'/my-stuff',
              templateUrl: "src/view/my-stuff/my-stuff.html",
            })
            .state('world-stuff',{
                url:'/world-stuff',
                templateUrl: "src/view/world-stuff/world-stuff.html"
            })

      })



})();
