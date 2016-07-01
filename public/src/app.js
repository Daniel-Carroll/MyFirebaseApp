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
            .state('view2',{
              url:'/view2',
              templateUrl: "src/view/view2/view2.html"
            })

      })



})();
