'use strict';

// Creates the Controller
var HomeController = function($scope, $rootScope, sparkSetup) {
  sparkSetup.enableInvalidationInterval();
  sparkSetup.debug = true;

  $scope.pageTitle = "The Singleton Pattern";

  $scope.onScroll = function (ratio) {
    //console.log(ratio);
  };

  $scope.backgroundAnimation = {
    '0'   : {
      'background-color'  : '#03A9F4'
    },
    '500' : {
      "background-color"  : '#E1F5FE'
    },
    '2500' : {
      "background-color"  : '#E1F5FE'
    },
    '3000' : {
      "background-color"  : '#FFF8E1'
    },
    '4000' : {
      "background-color"  : '#FAFAFA'
    },
    ease  :'easeOutQuad'
  };

  $scope.sunAnimation = {
    ease  :'easeOutQuad',
    '5000' :  {
      width               :'3em',
      height              :'3em',
      left                : '80vw',
      top                 : '5em',
      'background-color'  : '#263238',
      opacity             : '0.0',
      ease                : 'easeOutSine'
    },
    '4000' :  { width:'3em', height:'3em', left: '60vw', top: '2em', 'background-color' : '#F57F17', opacity : '1.0', ease: 'easeOutSine' },
    '3000' :  { width:'3em', height:'3em', left: '50vw', top: '0.5em', 'background-color' : '#F57F17', ease: 'easeOutSine' },
    '2000' :  { width:'3em', height:'3em', left: '20vw', top: '2em', 'background-color' : '#FFEA00', ease: 'easeOutSine' },
    '1000' :  { width:'3em', height:'3em', top: '5em', left: '3vw', 'background-color' : '#FFFF00', ease: 'easeOutSine' },
    '130'  :  { width:'30vw', height:'30vw', top: '9em', left: '35vw', 'background-color' : '#FFFF00', ease: 'easeOutSine'},
    '20'  :  { width:'80vw', height:'80vw', top: '10em', left: '10vw', 'background-color' : '#FFFF00', ease: 'easeOutSine' }
  };

  $scope.titleAnimation = {
    ease:'easeOutQuad',
    '420': { top: '7em', 'font-size': '1em', color: '#ffffff' },
    '350': { color: '#5d5d5d' },
    '200': { top: '5em', 'font-size': '4em', color: '#5d5d5d', ease: 'linear' }
  };

  $scope.skyAnimation = {
    '0'   : {
      'background-color'  : '#81D4FA',
      opacity             : '0.0'
    },
    '220'  : {
      "background-color"  : '#81D4FA',
      opacity             : '0.0'
    },
    '320' : {
      "background-color"  : '#81D4FA',
      opacity             : '1.0'
    },
    '1000' : {
      "background-color"  : '#4FC3F7',
      opacity             : '1.0'
    },
    '2000' : {
      "background-color"  : '#29B6F6',
      opacity             : '1.0'
    },
    '2500' : {
      "background-color"  : '#03A9F4',
      opacity             : '1.0'
    },
    '3000' : {
      "background-color"  : '#D84315',
      opacity             : '1.0'
    },
    '3500' : {
      "background-color"  : '#BF360C',
      opacity             : '1.0'
    },
    '4000' : {
      "background-color"  : '#263238',
      opacity             : '1.0'
    },
    ease  :'easeOutQuad'
  };

  $scope.sectionOne = {
    '0' : {
      opacity             : '0.0'
    },
    '400' : {
      opacity             : '0.0'
    },
    '600' : {
      opacity             : '1.0'
    },
    '1600' : {
      opacity             : '0.0'
    },
    ease  :'easeOutQuad'
  };

  $scope.sectionTwo = {
    '0' : {
      opacity             : '0.0'
    },
    '1300' : {
      opacity             : '0.0'
    },
    '1600' : {
      opacity             : '1.0'
    },
    '2600' : {
      opacity             : '0.0'
    },
    ease  :'easeOutQuad'
  };


  $scope.sectionThree = {
    '0' : {
      opacity             : '0.0'
    },
    '2300' : {
      opacity             : '0.0'
    },
    '2600' : {
      opacity             : '1.0'
    },
    '3600' : {
      opacity             : '0.0'
    },
    ease  :'easeOutQuad'
  };

  $scope.sectionFour = {
    '0' : {
      opacity             : '0.0'
    },
    '3300' : {
      opacity             : '0.0'
    },
    '3600' : {
      opacity             : '1.0'
    },
    '4600' : {
      opacity             : '0.0'
    },
    ease  :'easeOutQuad'
  };

  $scope.sectionFive = {
    '0' : {
      opacity             : '0.0'
    },
    '4300' : {
      opacity             : '0.0'
    },
    '4600' : {
      opacity             : '1.0'
    },
    '5600' : {
      opacity             : '0.0'
    },
    ease  :'easeOutQuad'
  };

  $scope.quizAnimation = {
    '0' : {
      opacity             : '0.0'
    },
    '5300' : {
      opacity             : '0.0'
    },
    '5600' : {
      opacity             : '1.0'
    },
    ease  :'easeOutQuad'
  };

};

// Injects the Dependencies (in a way that can be compressed)
HomeController.$inject = [ '$scope', '$rootScope', 'sparkSetup' ];

// Declares the module
angular.module('app.home', []).controller('HomeController', HomeController);
