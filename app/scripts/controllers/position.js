'use strict';

/**
 * @ngdoc function
 * @name unicefApp.controller:PositionCtrl
 * @description
 * # PositionCtrl
 * Controller of the unicefApp
 */
angular.module('unicefApp')
  .controller('PositionCtrl', function($scope, ngTableParams, $http, $route) {

    $scope.data = [];

    $http.get('http://localhost:2361/api/Positions').
    success(function(data, status, headers, config) {
      $scope.data = data;
      $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 10 // count per page
      }, {
        total: $scope.data.length, // length of data
        getData: function($defer, params) {

          $defer.resolve($scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });

    }).
    error(function(data, status, headers, config) {

    });

    /**
     * @ngdoc method
     * Delete item from healthStatusType
     * @param  {int} id id of the item
     * @return {status}    status
     */
    $scope.deleteItem = function(id) {

      $http.delete('http://localhost:2361/api/Positions/' + id).
      success(function(data, status, headers, config) {
            $route.reload();
              }).

      error(function(data, status, headers, config) {

      });


    }

    $scope.updateItem = function(item) {

      item.Modified = $scope.today();
      item.ModifiedBy = "Developer";
      $http({
        method: 'PUT',
        data: item,
        url: "http://localhost:2361/api/Positions/" + item.PositionId
      }).
      success(function(data, status, headers, config) {
        console.log(status);
      }).
      error(function(data, status, headers, config) {
        console.log(status);
      });
    }

    $scope.insertItem = function(description) {
      var item = {};
      item.Description = description;
      item.Created = $scope.today();
      item.CreatedBy = "Developer";
      item.Modified = $scope.today();
      item.ModifiedBy = "Developer";

      $http({
        method: 'POST',
        data: item,
        url: "http://localhost:2361/api/Positions"
      }).
      success(function(data, status, headers, config) {
        console.log(data.PositionId);
        $route.reload();
        $scope.data.push(description);

      }).
      error(function(data, status, headers, config) {
        console.log(status);
      });

    }

    $scope.today = function() {
      $scope.dt = new Date();
      return $scope.dt;
    };


  });
