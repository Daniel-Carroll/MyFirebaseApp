(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: '699-CRB-01',
        avatar: 'svg-1',
        content: 'Packages: 5'
      },
      {
        name: '699-CRB-02',
        avatar: 'svg-2',
        content: 'Packages: 5'
      },
      {
        name: '699-CRB-03',
        avatar: 'svg-3',
        content: 'Packages: 5'      },
      {
        name: '699-CRF-01',
        avatar: 'svg-4',
        content: 'Packages: 5'      },
      {
        name: '699-CRR-01',
        avatar: 'svg-5',
        content: 'Packages: 5'      },
      {
        name: '699-CRR-02',
        avatar: 'svg-6',
        content: 'Packages: 5'      },
        {
          name: '699-CRB-01',
          avatar: 'svg-1',
          content: 'Packages: 5'
        },
        {
          name: '699-CRB-02',
          avatar: 'svg-2',
          content: 'Packages: 5'
        },
        {
          name: '699-CRB-03',
          avatar: 'svg-3',
          content: 'Packages: 5'      },
        {
          name: '699-CRF-01',
          avatar: 'svg-4',
          content: 'Packages: 5'      },
        {
          name: '699-CRR-01',
          avatar: 'svg-5',
          content: 'Packages: 5'      },
        {
          name: '699-CRR-02',
          avatar: 'svg-6',
          content: 'Packages: 5'      },
          {
            name: '699-CRB-01',
            avatar: 'svg-1',
            content: 'Packages: 5'
          },
          {
            name: '699-CRB-02',
            avatar: 'svg-2',
            content: 'Packages: 5'
          },
          {
            name: '699-CRB-03',
            avatar: 'svg-3',
            content: 'Packages: 5'      },
          {
            name: '699-CRF-01',
            avatar: 'svg-4',
            content: 'Packages: 5'      },
          {
            name: '699-CRR-01',
            avatar: 'svg-5',
            content: 'Packages: 5'      },
          {
            name: '699-CRR-02',
            avatar: 'svg-6',
            content: 'Packages: 5'      },
            {
              name: '699-CRB-01',
              avatar: 'svg-1',
              content: 'Packages: 5'
            },
            {
              name: '699-CRB-02',
              avatar: 'svg-2',
              content: 'Packages: 5'
            },
            {
              name: '699-CRB-03',
              avatar: 'svg-3',
              content: 'Packages: 5'      },
            {
              name: '699-CRF-01',
              avatar: 'svg-4',
              content: 'Packages: 5'      },
            {
              name: '699-CRR-01',
              avatar: 'svg-5',
              content: 'Packages: 5'      },
            {
              name: '699-CRR-02',
              avatar: 'svg-6',
              content: 'Packages: 5'      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
