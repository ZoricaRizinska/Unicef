'use strict';

/**
 * @ngdoc function
 * @name unicefApp.controller:HealtstatustypeCtrl
 * @description
 * # HealtstatustypeCtrl
 * Controller of the unicefApp
 */
angular.module('unicefApp')
  .controller('HealtstatustypeCtrl', function($scope, ngTableParams, $http, $route) {

    $scope.data = [];

    $http.get('http://localhost:40366/api/HealthStatusTypes').
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      // console.log(data[0].Description);
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
      // called asynchronously if an error occurs
      // or server returns response with an error status.

    });

    /**
     * @ngdoc method
     * Delete item from healthStatusType
     * @param  {int} id id of the item
     * @return {status}    status
     */
    $scope.deleteItem = function(id) {

      $http.delete('http://localhost:40366/api/HealthStatusTypes/' + id).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        // console.log(data[0].Description);
        for (var i = $scope.data.length - 1; i >= 0; i--) {
          if ($scope.data[i].HealthStatusTypeId == id) {
            $scope.data.splice(i, 1);
            $route.reload();
          }
        };

      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.

      });


    }

    $scope.updateItem = function(item) {

      item.Modified = $scope.today();
      item.ModifiedBy = "Developer";
      $http({
        method: 'PUT',
        data: item,
        url: "http://localhost:40366/api/HealthStatusTypes/" + item.HealthStatusTypeId
      }).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(status);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
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
        url: "http://localhost:40366/api/HealthStatusTypes"
      }).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $route.reload();
        $scope.data.push(description);
        // $scope.description = "";

      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(status);
      });

    }



    $scope.today = function() {
      $scope.dt = new Date();
      return $scope.dt;
    };

    $scope.today();
    $scope.clear = function() {
      $scope.dt = null;
    };


    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events =
      [{
        date: tomorrow,
        status: 'full'
      }, {
        date: afterTomorrow,
        status: 'partially'
      }];

    $scope.getDayClass = function(date, mode) {
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

        for (var i = 0; i < $scope.events.length; i++) {
          var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    };

  });
