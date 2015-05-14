'use strict';

/**
 * @ngdoc function
 * @name unicefApp.controller:PositionCtrl
 * @description
 * # PositionCtrl
 * Controller of the unicefApp
 */
angular.module('unicefApp')
  .controller('PositionCtrl', function ($scope, ngTableParams, $http ,$route) {

    $scope.data;

    $http.get('http://www.filltext.com/?rows=20&fname={firstName}&lname={lastName}&redovnost={bool}&pretty=true').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    // console.log(data[0].Description);

    $scope.data = data;

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
      }, {
        total: $scope.data.length, // length of data
        getData: function($defer, params) {
          $defer.resolve($scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });

  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.

  });


  $scope.printdata = function(){
    console.log($scope.data);
  }


  });
