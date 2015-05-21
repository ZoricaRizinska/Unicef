'use strict';

/**
 * @ngdoc function
 * @name unicefApp.controller:ForgotpasswordCtrl
 * @description
 * # ForgotpasswordCtrl
 * Controller of the unicefApp
 */
angular.module('unicefApp')
  .controller('ForgotpasswordCtrl', function ($scope, toastr, $location) {

      $scope.reset = function(username){

        //call api for password resset

        toastr.success( ''+ username +' , на вашиот e-mail е испратена нова лозинка', 'Лозинката е рестартирана');

        $location.path('/login');
      }

  });
