/**
 * Creates the Factory
 */
var HomeMobileAnimator = function() {

    this.inMobile = function () {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            return true;
        }
        else {
            return false;
        }
    };

    this.backgroundAnimation = {
    };

    this.sunAnimation = {

    };

    this.titleAnimation = {
        ease:'easeOutQuad',
        '200': { top: '0em', 'font-size': '2em', color: '#ffffff' },
        '0': { top: '3em', 'font-size': '2em', color: '#5d5d5d', ease: 'linear' }
    };

    this.skyAnimation = {
        '0'   : {
            'background-color'  : '#81D4FA',
            opacity             : '0.0'
        },
        '200' : {
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
        '1600' : {
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

    return this;
};

// Injects the Dependencies (in a way that can be compressed)
HomeMobileAnimator.$inject = [];

// Declares the module
angular.module('app.home.mobile', [])
    .factory('HomeMobileAnimator', HomeMobileAnimator);