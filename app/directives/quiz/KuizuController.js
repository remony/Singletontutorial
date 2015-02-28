'use strict';

angular.module('app.kuizu', [])


    .directive('kuizu', function(kuizuFactory)  {
        return  {
            restrict: 'AE',
            scope:{},
            templateUrl: 'directives/quiz/kuizu.html',
            link: function(scope, elem, attrs) {
                var filename = attrs.datasource;
                kuizuFactory.loadQuestions(attrs.datasource);
                console.log(attrs.datasource);
                scope.start = function() {
                    scope.id = 0;
                    scope.quizOver = false;
                    scope.inProgress = true;

                    scope.getQuestion();

                };

                scope.reset = function() {
                    scope.inProgress = false;
                    scope.score = 0;
                    scope.totalQuestions = 0;
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

                scope.checkAnswer = function(ans) {
                    if(ans.option) return;

                    if(ans == scope.options[scope.answer]) {
                        scope.score++;
                        scope.correctAns = true;
                    } else {
                        scope.correctAns = false;
                    }
                    scope.id++;
                    scope.getQuestion();
                };

                scope.reset();
            }
        };
    })

    .factory('kuizuFactory', function($http) {
        var questions;

        return  {
            getQuestion: function(id) {

                if(id < questions.length) {
                    return questions[id];
                } else {

                    return false;
                }
            },
            loadQuestions: function(filename)   {
                $http.get('directives/quiz/categories/' + filename)
                    .then(function (res) {
                        questions = res.data;
                    });

            }
        }
    });