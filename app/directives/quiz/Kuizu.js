'use strict';

angular.module('app.kuizu', [])
    .directive('kuizu', function (kuizuFactory, $timeout) {
        return {
            restrict: 'AE',
            scope: {},
            templateUrl: 'directives/quiz/kuizu.html',
            link: function (scope, elem, attrs) {
                kuizuFactory.loadQuestions(attrs.datasource);
                //Starts the quiz
                scope.start = function () {
                    scope.id = 0;
                    scope.score = 0;
                    scope.quizOver = false;
                    scope.inProgress = true;
                    scope.questionStatus = true;
                    scope.fileExists = false;
                    scope.getQuestion();
                };
                //Resets the quiz to start again
                scope.reset = function () {
                    scope.inProgress = false;
                    scope.score = 0;
                };
                //Gets the question from the json file and sends it to the view
                scope.getQuestion = function () {

                    var q = kuizuFactory.getQuestion(scope.id);

                    $timeout( function(){
                        if (q) {
                            scope.question = q.question;
                            scope.options = q.options;
                            scope.answer = q.answer;
                            scope.answerMode = true;
                            scope.questionStatus = true;
                        } else {
                            console.log(scope.log);
                            if (scope.score == 0)   {
                                scope.fileExists = true;
                            }
                            scope.quizOver = true;
                        }
                        scope.correctAns = false;
                        scope.wrongAns = false;
                    }, 500);
                };

                //When pressing a option it will check if the answer is right or wrong, if right gets next question
                scope.checkAnswer = function (ans) {
                    if (ans.option) return;
                    if (ans ==  scope.options[scope.answer]) {
                        console.log("%cCORRECT", "color:GREEN; font-size: 16pt");
                        scope.score++;
                        scope.correctAns = true;
                        scope.wrongAns = false;
                    } else {
                        console.log("%cWrong.", "color:RED; font-size: 16pt");
                        scope.wrongAns = true;
                        scope.correctAns = false;
                    }
                    scope.questionStatus = false;
                    scope.id++;
                    scope.getQuestion();
                };

                scope.reset();
            }
        };
    })
    .factory('kuizuFactory', function ($http) {
        var questions;

        return {
            getQuestion: function (id) {
                //console.log(questions.length);
                if (questions != null)   {
                    if (id < questions.length) {
                        return questions[id];
                    } else {
                        return false;
                    }
                }   else    {
                    return false;
                }

            },
            //Loads the questions from the defined filesource
            loadQuestions: function (filename) {
                $http.get('assets/quiz/' + filename)
                    .error(function(res)    {
                        console.log("The file doesn't exist - please contact the site owner");
                    })
                    .then(function (res) {
                        questions = res.data;
                    });
            }
        }
    });