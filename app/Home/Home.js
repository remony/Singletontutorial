'use strict';

// Creates the Controller
var HomeController = function($scope, $rootScope,  HomeBrowserAnimator, HomeMobileAnimator, sparkSetup) {
  $scope.prefix = (window.location.pathname.search('/app') === -1)?'app/':'';
  sparkSetup.enableInvalidationInterval();
  sparkSetup.debug = false;


  $scope.pageTitle = "The Singleton Pattern";

  var mobile = HomeMobileAnimator.inMobile();
  var windows = HomeBrowserAnimator.inWindows();
  $scope.firefox = HomeBrowserAnimator.inFirefox();

  console.log('Mobile: ' + mobile);
  console.log('Windows: ' + windows);

  var Animator = HomeBrowserAnimator;
  if (mobile) {
    Animator = HomeBrowserAnimator;//HomeMobileAnimator;
  }


  $scope.backgroundAnimation = Animator.backgroundAnimation;
    $scope.sunAnimation   = Animator.sunAnimation;
  $scope.titleAnimation = Animator.titleAnimation;
  $scope.skyAnimation   = Animator.skyAnimation;

  $scope.sectionOne     = Animator.sectionOne;
  $scope.sectionTwo     = Animator.sectionTwo;
  $scope.sectionThree   = Animator.sectionThree;
  $scope.sectionFour    = Animator.sectionFour;
  $scope.sectionFive    = Animator.sectionFive;

  $scope.quizAnimation  = Animator.quizAnimation;
    $scope.navigationAnimations = Animator.navigationAnimations;
    $scope.arrowAnimations = Animator.arrowAnimations;
    $scope.videoAnimations = Animator.videoAnimations;




};

// Injects the Dependencies (in a way that can be compressed)
HomeController.$inject = [ '$scope', '$rootScope', 'HomeBrowserAnimator', 'HomeMobileAnimator', 'sparkSetup' ];

// Declares the module
angular.module('app.home', []).controller('HomeController', HomeController);
