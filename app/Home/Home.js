'use strict';

// Creates the Controller
var HomeController = function($scope, $rootScope, sparkSetup) {
  sparkSetup.enableInvalidationInterval();
  sparkSetup.debug = true;

  $scope.pageTitle = "The Singleton Pattern";

  $scope.onScroll = function (ratio) {
    //console.log(ratio);
  };

  $scope.sunAnimation = {
    ease  :'easeOutQuad',
    '1000' :  {
      width               :'3em',
      height              :'3em',
      left                : '80vw',
      top                 : '5em',
      'background-color'  : 'rgba(0, 0, 0, 0.00)',
      ease                : 'easeOutSine'
    },
    '850' :  { width:'3em', height:'3em', left: '60vw', top: '2em', 'background-color' : 'rgb(255, 79, 14)', ease: 'easeOutSine' },
    '600' :  { width:'3em', height:'3em', left: '50vw', top: '0.5em', 'background-color' : 'rgb(255, 115, 0)', ease: 'easeOutSine' },
    '500' :  { width:'3em', height:'3em', left: '20vw', top: '2em', 'background-color' : 'rgb(255, 181, 0)', ease: 'easeOutSine' },
    '420' :  { width:'3em', height:'3em', top: '5em', left: '3vw', 'background-color' : 'rgb(255, 255, 10)', ease: 'easeOutSine' },
    '130'  :  { width:'30vw', height:'30vw', top: '9em', left: '35vw', 'background-color' : 'rgb(255, 255, 10)', ease: 'easeOutSine'},
    '20'  :  { width:'80vw', height:'80vw', top: '10em', left: '10vw', 'background-color' : 'rgb(255, 255, 10)', ease: 'easeOutSine' }
  };

  $scope.titleAnimation = {
    ease:'easeOutQuad',
    '420': { top: '7em', 'font-size': '1em', color: '#ffffff' },
    '350': { color: '#5d5d5d' },
    '200': { top: '5em', 'font-size': '4em', color: '#5d5d5d', ease: 'linear' }
  };

  $scope.skyAnimation = {
    '0'   : {
      'background-color'  : 'rgb(12, 144, 255)',
      opacity             : '0.0'
    },
    '220'  : {
      "background-color"  : 'rgb(12, 144, 255)',
      opacity             : '0.0'
    },
    '320' : {
      "background-color"  : 'rgb(12, 144, 255)',
      opacity             : '1.0'
    },
    '500' : {
      "background-color"  : 'rgb(12, 144, 255)',
      opacity             : '1.0'
    },
    '700' : {
      "background-color"  : 'rgb(198, 89, 0)',
      opacity             : '1.0'
    },
    '750' : {
      "background-color"  : 'rgb(198, 89, 0)',
      opacity             : '1.0'
    },
    '900' : {
      "background-color"  : 'rgb(0, 0, 0)',
      opacity             : '1.0'
    },
    ease  :'easeOutQuad'
  };

};

// Injects the Dependencies (in a way that can be compressed)
HomeController.$inject = [ '$scope', '$rootScope', 'sparkSetup' ];

// Declares the module
angular.module('app.home', []).controller('HomeController', HomeController);
