'use strict';

/**
 * @ngdoc function
 * @name unicefApp.controller:MunicipalityCtrl
 * @description
 * # MunicipalityCtrl
 * Controller of the unicefApp
 */
angular.module('unicefApp')
  .controller('MunicipalityCtrl', function($scope, ngTableParams, $http, $route) {

    $scope.data = [];

    $http.get('http://localhost:2361/api/Municipalities').
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

      $http.delete('http://localhost:2361/api/Municipalities/' + id).
      success(function(data, status, headers, config) {
        for (var i = $scope.data.length - 1; i >= 0; i--) {
          if ($scope.data[i].MunicipalityId == id) {
            $scope.data.splice(i, 1);
            $route.reload();
          }
        };

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
        url: "http://localhost:2361/api/Municipalities/" + item.MunicipalityId
      }).
      success(function(data, status, headers, config) {
        console.log(status);
      }).
      error(function(data, status, headers, config) {
        console.log(status);
      });
    }

    $scope.insertItem = function(description, code) {
      var item = {};
      item.Description = description;
      item.Code = code;
      item.Created = $scope.today();
      item.CreatedBy = "Developer";
      item.Modified = $scope.today();
      item.ModifiedBy = "Developer";

      $http({
        method: 'POST',
        data: item,
        url: "http://localhost:2361/api/Municipalities"
      }).
      success(function(data, status, headers, config) {
        $route.reload();
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
