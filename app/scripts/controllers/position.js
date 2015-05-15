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

    $scope.data = [
    {
        "fname": "LaFaye",
        "lname": "Frazee",
        "redovnost": true
    },
    {
        "fname": "Fred",
        "lname": "Deno",
        "redovnost": true
    },
    {
        "fname": "Anuj",
        "lname": "Leblanc",
        "redovnost": true
    },
    {
        "fname": "Hugh",
        "lname": "Partridge",
        "redovnost": false
    },
    {
        "fname": "Roseline",
        "lname": "Haag",
        "redovnost": false
    },
    {
        "fname": "Georgia",
        "lname": "User",
        "redovnost": false
    },
    {
        "fname": "Clyde",
        "lname": "Vyater",
        "redovnost": true
    },
    {
        "fname": "Noor",
        "lname": "Mangat",
        "redovnost": false
    },
    {
        "fname": "Mohamed",
        "lname": "Stevenson",
        "redovnost": true
    },
    {
        "fname": "Terry",
        "lname": "Key",
        "redovnost": false
    },
    {
        "fname": "Marita",
        "lname": "Chavez",
        "redovnost": false
    },
    {
        "fname": "Gianfranco",
        "lname": "Vicari",
        "redovnost": true
    },
    {
        "fname": "Jessica",
        "lname": "Kinnamon",
        "redovnost": true
    },
    {
        "fname": "Val",
        "lname": "Wooten",
        "redovnost": false
    },
    {
        "fname": "Gia",
        "lname": "Zensen",
        "redovnost": false
    },
    {
        "fname": "Kantanzia",
        "lname": "Lammers",
        "redovnost": true
    },
    {
        "fname": "Noby",
        "lname": "Vanhoose",
        "redovnost": false
    },
    {
        "fname": "Leo",
        "lname": "Planty",
        "redovnost": false
    },
    {
        "fname": "Meiyin",
        "lname": "Jezak",
        "redovnost": false
    },
    {
        "fname": "Thursday",
        "lname": "Tabor",
        "redovnost": true
    }
];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
      }, {
        total: $scope.data.length, // length of data
        getData: function($defer, params) {
          $defer.resolve($scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });

  //   $http.get('http://www.filltext.com/?rows=20&fname={firstName}&lname={lastName}&redovnost={bool}&pretty=true').
  // success(function(data, status, headers, config) {
  //   // this callback will be called asynchronously
  //   // when the response is available
  //   // console.log(data[0].Description);

  //   $scope.data = data;

  //   $scope.tableParams = new ngTableParams({
  //       page: 1,            // show first page
  //       count: 10           // count per page
  //     }, {
  //       total: $scope.data.length, // length of data
  //       getData: function($defer, params) {
  //         $defer.resolve($scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
  //       }
  //     });

  // }).
  // error(function(data, status, headers, config) {
  //   // called asynchronously if an error occurs
  //   // or server returns response with an error status.

  // });


  $scope.printdata = function(){
    console.log($scope.data);
  }


  });
