'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('app', [
  // Plugins
  'ngRoute',
  'ngFx',
  'ngAnimate',
  'gilbox.sparkScroll',
  'smoothScroll',

  // Home Controller
  'app.home.browser',
  'app.home.mobile',
  'app.home',

  // Directives
  'app.kuizu'
]);


App.config(['$routeProvider', function($routeProvider, $rootScope) {
  var prefix = (window.location.pathname.search('/app') === -1)?'app/':'';

  $routeProvider.when('/Home', {
    templateUrl: prefix + 'Home/Home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise({redirectTo: '/Home'});
}]);


