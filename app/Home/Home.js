'use strict';

// Creates the Controller
var HomeController = function($scope) {

};

// Injects the Dependencies (in a way that can be compressed)
HomeController.$inject = [ '$scope' ];

// Declares the module
angular.module('app.home', []).controller('HomeController', HomeController);
