'use strict';

// Creates the Controller
var HomeController = function($scope, sparkSetup) {
  sparkSetup.enableInvalidationInterval();
  sparkSetup.debug = true;

$scope.pageTitle="Singleton";

  //$scope.sunAnimation = {
  //  ease:'easeOutQuad',
  //  0   : { 'downAddClass,upRemoveClass': 'BigSun SmallSun' },
  //  300  : { 'downAddClass,upRemoveClass': 'SmallSun BigSun', ease: 'linear' }
  //};

  $scope.sunAnimation = {
    ease:'easeOutQuad',
    80:{width:'3em', height:'3em', top: '1em', left: '3em' },
    30:{width:'30vw', height:'30vw', top: '5vw', left: '35vw'},
    20:{width:'80vw', height:'80vw', top: '10vw', left: '10vw', ease: 'linear'}
  };

  $scope.titleAnimation = {
    ease:'easeOutQuad',
    80: { top: '10vh', 'font-size': '1em' },
    81: { 'downAddClass,upRemoveClass': 'move stay'},
    20: { top: '50vh', 'font-size': '4em', ease: 'linear' },
    21: { 'downAddClass,upRemoveClass': 'stay move' }
  };

  $scope.skyAnimation = {
    ease:'easeOutQuad',
    80:{ opacity: '1.0' },
    50:{ opacity: '0.0' },
    0:{ opacity: '0.0' },
    endAddClass: 'stay'
  };

};

// Injects the Dependencies (in a way that can be compressed)
HomeController.$inject = [ '$scope', 'sparkSetup' ];

// Declares the module
angular.module('app.home', []).controller('HomeController', HomeController);
