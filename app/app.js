'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('app', [
  'ngRoute',
    'ngFx',
    'ngAnimate',
  'gilbox.sparkScroll',
  'app.home'
]);

App.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/Home', {
    templateUrl: 'Home/Home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise({redirectTo: '/Home'});
}]);
