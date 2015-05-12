'use strict';

/**
 * @ngdoc function
 * @name unicefApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the unicefApp
 */
angular.module('unicefApp')
  .controller('HeaderCtrl', function ($scope, $location) {

      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };

  });
