'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('app', [
  // Plugins
  'ngRoute',
  'ngFx',
  'ngAnimate',
  'gilbox.sparkScroll',

  // Home Controller
  'app.home.browser',
  'app.home.mobile',
  'app.home',

  // Directives
  'app.kuizu'
]);

App.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/Home', {
    templateUrl: 'Home/Home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise({redirectTo: '/Home'});
}]);
