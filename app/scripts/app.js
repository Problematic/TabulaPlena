'use strict';

angular.module('TabulaPlenaApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/write/:id?', {
        templateUrl: 'views/write.html',
        controller: 'WriteCtrl',
        resolve: {
          writeup: function ($route, writeupService) {
            var id = $route.current.params.id;

            if (id) {
              return writeupService.get(id);
            }
            return writeupService.create();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
