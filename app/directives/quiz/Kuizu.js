'use strict';

angular.module('app.kuizu', [])
    .directive('kuizu', function () {
        var prefix = (window.location.pathname.search('/app') === -1)?'app/':'';

        return {
            scope: {
                datasource: '='
            },
            templateUrl: prefix + 'directives/quiz/kuizu.html',
            controller: function ($scope, $rootScope,  $element, $attrs, $http, $timeout) {
                $scope.datasource = $attrs.datasource;
                console.log($scope.datasource);

                //Starts the quiz
                $scope.start = function () {
                    $scope.id = 0;
                    $scope.score = 0;
                    $scope.quizOver = false;
                    $scope.inProgress = true;
                    $scope.questionStatus = true;
                    $scope.fileExists = false;
                    $scope.kuizuComplete = "";
                    $scope.getQuestion();
                };

                //Resets the quiz to start again
                $scope.reset = function () {
                    $scope.inProgress = false;
                    $scope.score = 0;
                };

                //Gets the question from the json file and sends it to the view
                $scope.getQuestion = function () {
                    var question = $scope.readQuestion($scope.id);
                    $timeout( function(){
                    if (question) {
                        $scope.question = question.question;
                        $scope.options = question.options;
                        $scope.answer = question.answer;
                        $scope.answerMode = true;
                        $scope.questionStatus = true;
                    } else {
                        if ($scope.score == 0)   {
                            if(!$scope.id > 0)    {
                                $scope.fileExists = true;
                            }
                        }
                        $scope.quizOver = true;

                        var complete = $scope.datasource.replace('.json','complete');

                        $rootScope.kuizuComplete = complete;
                    }
                    $scope.correctAns = false;
                    $scope.wrongAns = false;
                    }, 500);
                };

                //When pressing a option it will check if the answer is right or wrong, if right gets next question
                $scope.checkAnswer = function (ans) {
                    if (ans.option) return;

                    if (ans ==  $scope.options[$scope.answer]) {
                        //console.log("%cCORRECT", "color:GREEN; font-size: 16pt");
                        $scope.score++;
                        $scope.correctAns = true;
                        $scope.wrongAns = false;
                    } else {
                        //console.log("%cWrong.", "color:RED; font-size: 16pt");
                        $scope.wrongAns = true;
                        $scope.correctAns = false;
                    }
                    $scope.questionStatus = false;
                    $scope.id++;
                    $scope.getQuestion();

                };

                $scope.reset();


                $scope.readQuestion = function (id) {
                    if ($scope.questions != null && id < $scope.questions.length) {
                        return $scope.questions[id];
                    }
                    return false;
                };

                $scope.loadQuestions = function () {
                    $http({
                        url: prefix + 'assets/quiz/' + $scope.datasource,
                        method: 'GET',
                        dataType: 'json',
                        data: null,
                        headers: null
                    }).success(function (data, status, headers, config) {
                        $scope.questions = data;

                    }).error(function(data, status, headers, config) {
                        console.log("The file doesn't exist - please contact the site owner");
                    });
                };

                $scope.loadQuestions();
            },
            link: function (scope, elem, attrs) {
                // Just for altering the DOM
            }
        };
    });