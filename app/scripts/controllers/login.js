'use strict';

/**
 * @ngdoc function
 * @name unicefApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the unicefApp
 */
angular.module('unicefApp')
  .controller('LoginCtrl', function ($scope, loginService, md5, $location) {


    $scope.login = function(){

      var hashPassword = md5.createHash($scope.password);
      var username = $scope.username;

      loginService.login(username, hashPassword);

    }

    $scope.forgotPassword = function(){
      $location.path('/forgotpassword');
    }


  });
