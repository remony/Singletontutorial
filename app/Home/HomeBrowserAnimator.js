/**
 * Creates the Factory
 */
var HomeBrowserAnimator = function() {

    this.inWindows = function () {
        if (navigator.userAgent.match(/Windows/i)){
            return true;
        }
        else {
            return false;
        }
    };

    this.inFirefox = function () {
        if (navigator.userAgent.match(/Firefox/i)){
            return true;
        }
        else {
            return false;
        }
    };

    this.inIE = function () {
        if (navigator.userAgent.match(/MSIE/i)){
            return true;
        }
        else {
            return false;
        }
    };

    this.backgroundAnimation = {
        '0'     : { 'background-color'  : '#03A9F4' },
        '500'   : { 'background-color'  : '#fff' },
        '2500'  : { 'background-color'  : '#fff' },
        '3000'  : { 'background-color'  : '#fff' },
        '4000'  : { 'background-color'  : '#fff' },
        ease    :'easeOutQuad'
    };

    this.arrowAnimations = {
        ease    : 'easeOutQuad',
        '20'    : { bottom: '-0.5em', opacity : 1 },
        '300'   : { bottom: '-0.9em' },
        '400'   : { bottom: '-50em', opacity : 0 }
    };

    this.cloud1Animations = {
        ease    : 'easeOutQuad',
        '0'    : { left: '140vh', opacity : 1 },
        '400'   : { left: '-50em', opacity : 1 },
        '401'   : { bottom:'-100em'}
    };
    this.cloud2Animations = {
        ease    : 'easeOutQuad',
        '0'    : { left: '0vh', opacity : 1 },
        '400'   : { left: '200vh', opacity : 1 },
        '401'   : { bottom:'-100em'}
    };
    this.cloud3Animations = {
        ease    : 'easeOutQuad',
        '0'    : { left: '10vh', opacity : 1 },
        '400'   : { left: '200vh', opacity : 1 },
        '401'   : { bottom:'-100em'}
    };
    this.cloud4Animations = {
        ease    : 'easeOutQuad',
        '0'    : { left: '40vh', opacity : 1 },
        '400'   : { left: '-50em', opacity : 1 },
        '401'   : { bottom:'-100em'}
    };
    this.cloud5Animations = {
        ease    : 'easeOutQuad',
        '0'    : { left: '100vh', opacity : 1 },
        '400'   : { left: '-50em', opacity : 1 },
        '401'   : { bottom:'-100em'}
    };



    this.bannerAnimations = {
        ease    : 'easeOutQuad',
        '0'    : { top: '0em', opacity : 1 },
        '300'   : { top: '-0.9em' },
        '400'   : { top: '-50em', opacity : 0 }
    }

    this.videoAnimations = {
        ease    : 'easeOutQuad',
        '20'    : {opacity: 1 },
        '600'  : { opacity : 0 }
    };

    this.sunAnimation = {
        ease    : 'easeOutQuad',
        '20'    : { width :'80vw',  height : '80vw',    top : '10em', left: '10vw', 'background-color' : '#FFFF00', ease: 'easeOutSine' },
        '130'   : { width :'30vw',  height : '30vw',    top : '9em', left: '35vw', 'background-color' : '#FFFF00', ease: 'easeOutSine'},
        '1000'  : { width :'3em',   height : '3em',     top : '5em', left: '3vw', 'background-color' : '#FFFF00', ease: 'easeOutSine' },
        '2000'  : { width :'3em',   height : '3em',     left : '20vw', top: '2em', 'background-color' : '#FFEA00', ease: 'easeOutSine' },
        '3000'  : { width :'3em',   height : '3em',     left : '50vw', top: '0.5em', 'background-color' : '#F57F17', ease: 'easeOutSine' },
        '4000'  : { width :'3em',   height : '3em',     left : '60vw', top: '2em', 'background-color' : '#F57F17', opacity : '1.0', ease: 'easeOutSine' },
        '5000'  : { width :'3em',   height : '3em',     left : '80vw', top : '5em', 'background-color'  : '#FFEB3B', opacity : '0.0', ease : 'easeOutSine'},
        '5001'  : { width :'3em',   height : '3em',     top : '5em', left: '3vw', 'background-color' : '#FFF', ease: 'easeOutSine' },
        '6000'  : { width :'3em',   height : '3em',     left : '20vw', top: '2em', 'background-color' : '#fff', ease: 'easeOutSine' },
        '7000'  : { width :'3em',   height : '3em',     left : '50vw', top: '0.5em', 'background-color' : '#fff', ease: 'easeOutSine' },
        '8000'  : { width :'3em',   height : '3em',     left : '60vw', top: '2em', 'background-color' : '#fff', opacity : '1.0', ease: 'easeOutSine' },
        '9000'  : { width :'3em',   height : '3em',     left : '80vw', top : '5em', 'background-color'  : '#fff', opacity : '0.0', ease : 'easeOutSine'},
        '9001'  : { width :'3em',   height : '3em',     top : '5em', left: '3vw', 'background-color' : '#FFFF00', ease: 'easeOutSine' },
        '10000'  : { width :'3em',   height : '3em',     left : '20vw', top: '2em', 'background-color' : '#FFEA00', ease: 'easeOutSine' },
        '11000'  : { width :'3em',   height : '3em',     left : '50vw', top: '0.5em', 'background-color' : '#F57F17', ease: 'easeOutSine' },
        '12000'  : { width :'3em',   height : '3em',     left : '60vw', top: '2em', 'background-color' : '#F57F17', opacity : '1.0', ease: 'easeOutSine' },
        '13000'  : { width :'3em',   height : '3em',     left : '80vw', top : '5em', 'background-color'  : '#FFEB3B', opacity : '0.0', ease : 'easeOutSine'}
    };

    this.titleAnimation = {
        ease:'easeOutQuad',
        '420': { top: '0.8em', 'font-size': '4em', color: '#fff' },
        '350': { color: '#5d5d5d' },
        '200': { top: '8em', 'font-size': '4em', color: '#212121', ease: 'linear' }
    };

    this.headerCloud1Animations  = {
        ease    : 'easeOutQuad',
        '20'    : { left:'-10vw', ease: 'easeOutSine' },
        '130'   : { left:'-10vw', ease: 'easeOutSine' },
        '1000'  : { left:'100vw', ease: 'easeOutSine' },
        '2000'  : { left:'-10vw', ease: 'easeOutSine' },
        '3000'  : { left:'-10vw', ease: 'easeOutSine' },
        '4000'  : { left:'100vw', ease: 'easeOutSine' },
        '5000'  : { left:'-10vw', ease: 'easeOutSine' },
        '5001'  : { left:'-10vw', ease: 'easeOutSine' },
        '6000'  : { left:'-10vw', ease: 'easeOutSine' },
        '7000'  : { left:'100vw', ease: 'easeOutSine' },
        '8000'  : { left:'-10vw', ease: 'easeOutSine' },
        '9000'  : { left:'-10vw', ease: 'easeOutSine' },
        '9001'  : { left:'100vw', ease: 'easeOutSine' },
        '10000'  : { left:'-10vw', ease: 'easeOutSine' },
        '11000'  : { left:'-10vw', ease: 'easeOutSine' },
        '12000'  : { left:'100vw', ease: 'easeOutSine' },
        '13000'  : { left:'-10vw', ease: 'easeOutSine' }
    };

    this.headerCloud2Animations  = {
        ease    : 'easeOutQuad',
        '20'    : { left:'200vh', ease: 'easeOutSine' },
        '130'   : { left:'200vh', ease: 'easeOutSine' },
        '1000'  : { left:'200vh', ease: 'easeOutSine' },
        '2000'  : { left:'-10vh', ease: 'easeOutSine' },
        '3000'  : { left:'200vh', ease: 'easeOutSine' },
        '4000'  : { left:'200vh', ease: 'easeOutSine' },
        '5000'  : { left:'-10vh', ease: 'easeOutSine' },
        '5001'  : { left:'200vh', ease: 'easeOutSine' },
        '6000'  : { left:'200vh', ease: 'easeOutSine' },
        '7000'  : { left:'200vh', ease: 'easeOutSine' },
        '8000'  : { left:'-10vh', ease: 'easeOutSine' },
        '9000'  : { left:'200vh', ease: 'easeOutSine' },
        '9001'  : { left:'200vh', ease: 'easeOutSine' },
        '10000'  : { left:'-10vh', ease: 'easeOutSine' },
        '11000'  : { left:'200vh', ease: 'easeOutSine' },
        '12000'  : { left:'-10vh', ease: 'easeOutSine' },
        '13000'  : { left:'200vh', ease: 'easeOutSine' }
    };

    this.headerCloud3Animations  = {
        ease    : 'easeOutQuad',
        '20'    : { left:'-10vw', ease: 'easeOutSine' },
        '130'   : { left:'100vw', ease: 'easeOutSine' },
        '1000'  : { left:'-10vw', ease: 'easeOutSine' },
        '2000'  : { left:'100vw', ease: 'easeOutSine' },
        '3000'  : { left:'100vw', ease: 'easeOutSine' },
        '4000'  : { left:'-10vw', ease: 'easeOutSine' },
        '5000'  : { left:'-10vw', ease: 'easeOutSine' },
        '5001'  : { left:'100vw', ease: 'easeOutSine' },
        '6000'  : { left:'-10vw', ease: 'easeOutSine' },
        '7000'  : { left:'100vw', ease: 'easeOutSine' },
        '8000'  : { left:'-10vw', ease: 'easeOutSine' },
        '9000'  : { left:'100vw', ease: 'easeOutSine' },
        '9001'  : { left:'-10vw', ease: 'easeOutSine' },
        '10000'  : { left:'-10vw', ease: 'easeOutSine' },
        '11000'  : { left:'-10vw', ease: 'easeOutSine' },
        '12000'  : { left:'-10vw', ease: 'easeOutSine' },
        '13000'  : { left:'100vw', ease: 'easeOutSine' }
    };

    this.skyAnimation = {
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
            "background-color"  : '#1A237E',
            opacity             : '1.0'
        },
        '5000' : {
            "background-color"  : '#333',
            opacity             : '1.0'
        },
        '6000'   : {
            'background-color'  : '#81D4FA',
            opacity             : '1.0'
        },
        '7000'  : {
            "background-color"  : '#81D4FA',
            opacity             : '1.0'
        },
        '8000' : {
            "background-color"  : '#81D4FA',
            opacity             : '1.0'
        },
        '9000' : {
            "background-color"  : '#4FC3F7',
            opacity             : '1.0'
        },
        '10000' : {
            "background-color"  : '#29B6F6',
            opacity             : '1.0'
        },
        '11000' : {
            "background-color"  : '#03A9F4',
            opacity             : '1.0'
        },
        '12000' : {
            "background-color"  : '#D84315',
            opacity             : '1.0'
        },
        '13000' : {
            "background-color"  : '#BF360C',
            opacity             : '1.0'
        },
        '14000' : {
            "background-color"  : '#1A237E',
            opacity             : '1.0'
        },
        '15000' : {
            "background-color"  : '#333',
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.sectionOne = {
        '0' : {
            opacity             : '1.0'
        },
        '400' : {
            opacity             : '1.0'
        },
        '600' : {
            opacity             : '1.0'
        },
        '900' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.sectionTwo = {
        '0' : {
            opacity             : '1.0'
        },
        '1300' : {
            opacity             : '1.0'
        },
        '1600' : {
            opacity             : '1.0'
        },
        '2600' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };


    this.sectionThree = {
        '0' : {
            opacity             : '1.0'
        },
        '2300' : {
            opacity             : '1.0'
        },
        '2600' : {
            opacity             : '1.0'
        },
        '3600' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.sectionFour = {
        '0' : {
            opacity             : '1.0'
        },
        '3300' : {
            opacity             : '1.0'
        },
        '3600' : {
            opacity             : '1.0'
        },
        '4600' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.sectionFive = {
        '0' : {
            opacity             : '1.0'
        },
        '4300' : {
            opacity             : '1.0'
        },
        '4600' : {
            opacity             : '1.0'
        },
        '5600' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.quizAnimation = {
        '0' : {
            opacity             : '1.0'
        },
        '5300' : {
            opacity             : '1.0'
        },
        '5600' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.navigationAnimations ={
        '20'    : {left: '-250px',
                    opacity: 0},
        '600'  : { left : '0em',
        opacity: 1}
    };



    return this;
};

// Injects the Dependencies (in a way that can be compressed)
HomeBrowserAnimator.$inject = [];

// Declares the module
angular.module('app.home.browser', [])
    .factory('HomeBrowserAnimator', HomeBrowserAnimator);