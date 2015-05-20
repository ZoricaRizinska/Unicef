'use strict';

/**
 * @ngdoc function
 * @name unicefApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unicefApp
 */
angular.module('unicefApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.labels = ["Машки", "Женски"];
    $scope.data = [450, 500];


  });
