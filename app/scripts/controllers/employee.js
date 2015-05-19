'use strict';

/**
 * @ngdoc function
 * @name unicefApp.controller:EmployeeCtrl
 * @description
 * # EmployeeCtrl
 * Controller of the unicefApp
 */
angular.module('unicefApp')
  .controller('EmployeeCtrl', function($scope, ngTableParams, $http, $route) {

    $scope.employee = {};

    $scope.nationality = [];
    $http.get('http://localhost:2361/api/Nationalities').
    success(function(data, status, headers, config) {
      $scope.nationality = data;
    }).
    error(function(data, status, headers, config) {

    });

    $scope.citizenship = [];
    $http.get('http://localhost:2361/api/Citizenships').
    success(function(data, status, headers, config) {
      $scope.citizenship = data;
    }).
    error(function(data, status, headers, config) {

    });



    $scope.data = [];

    $http.get('http://localhost:2361/api/Employees').
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

      $http.delete('http://localhost:2361/api/Employees/' + id).
      success(function(data, status, headers, config) {
        for (var i = $scope.data.length - 1; i >= 0; i--) {
          if ($scope.data[i].EmployeeId == id) {
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
        url: "http://localhost:2361/api/Employees/" + item.EmployeeId
      }).
      success(function(data, status, headers, config) {
        console.log(status);
      }).
      error(function(data, status, headers, config) {
        console.log(status);
      });
    }

    $scope.insertItem = function(item) {

      $scope.den = item.UniqueId.substr(0, 2);
      $scope.mesec = item.UniqueId.substr(2, 2);
      $scope.godina = "1" + item.UniqueId.substr(4, 3);

      var d = $scope.godina + "-" + $scope.mesec + "-" + $scope.den;

      item.BirthDate = d;
      item.Created = $scope.today();
      item.CreatedBy = "Developer";
      item.Modified = $scope.today();
      item.ModifiedBy = "Developer";

      $http({
        method: 'POST',
        data: item,
        url: "http://localhost:2361/api/Employees"
      }).
      success(function(data, status, headers, config) {
        $route.reload();

      }).
      error(function(data, status, headers, config) {
        console.log(status);
      });

    }

    //DATEPICKER

    $scope.today = function() {
      return new Date();
    };



  });
