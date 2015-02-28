'use strict';
angular.module('app.kuizu', [])
    .directive('kuizu', function(kuizuFactory)  {
        return  {
            restrict: 'AE',
            scope:{},
            templateUrl: 'directives/quiz/kuizu.html',
            link: function(scope, elem, attrs) {
                scope.start = function() {
                    scope.id = 0;
                    scope.quizOver = false;
                    scope.inProgress = true;
                    scope.getQuestion();
                };

                scope.reset = function() {
                    scope.inProgress = false;
                    scope.score = 0;
                };

                scope.getQuestion = function() {
                    var q = kuizuFactory.getQuestion(scope.id);
                    if(q) {
                        scope.question = q.question;
                        scope.options = q.options;
                        scope.answer = q.answer;
                        scope.answerMode = true;
                    } else {
                        scope.quizOver = true;
                    }
                };

                scope.checkAnswer = function($scope) {
                    //f(ans.option) return;
                    var ans = scope.quizValue;
                    console.log("You entered: " + scope.quizValue);
                    console.log("Answer is: " + scope.options[scope.answer]);

                    if(ans == scope.options[scope.answer]) {
                        scope.score++;
                        console.log("Hey, you got it right!");
                        scope.correctAns = true;
                    } else {
                        scope.correctAns = false;
                        console.log("Better luck next time..");
                    }

                    scope.answerMode = false;
                };

                scope.nextQuestion = function() {
                    scope.id++;
                    scope.getQuestion();
                }

                scope.reset();
            }
        };
    })

    .factory('kuizuFactory', function() {
        var questions = [
            {
                question: "2?",
                options: ["1", "2", "3", "4"],
                answer: 2
            },
            {
                question: "When did the second world war end?",
                options: ["1945", "1939", "1944", "1942"],
                answer: 0
            },
            {
                question: "Which was the first country to issue paper currency?",
                options: ["USA", "France", "Italy", "China"],
                answer: 3
            },
            {
                question: "Which city hosted the 1996 Summer Olympics?",
                options: ["Atlanta", "Sydney", "Athens", "Beijing"],
                answer: 0
            },
            {
                question: "Who invented telephone?",
                options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
                answer: 1
            }
        ];



        return  {
            getQuestion: function(id) {
                if(id < questions.length) {
                    return questions[id];
                } else {
                    return false;
                }
            }
        }
    });