angular.module('spacebook', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    var routeConfig = {
      controller: 'PostsCtrl',
      templateUrl: 'index.html',
      resolve: {
        store: function (postStorage) {
          postStorage.get();
          return postStorage;
        }
      }
    };

    $routeProvider
      .when('/', routeConfig)
      .when('/:status', routeConfig)
      .otherwise({
        redirectTo: '/'
      });
  });