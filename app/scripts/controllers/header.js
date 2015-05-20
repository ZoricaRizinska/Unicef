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

      $scope.sifrarnici = ['/agegroup',
        '/basicgroup',
        '/citizenship',
        '/healtstatustype',
        '/municipality',
        '/nationality',
        '/position',
        '/studyperiod',
        '/financesourcetype'
      ];


      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };


      $scope.isSifrarnik = function (){

        for (var i = $scope.sifrarnici.length - 1; i >= 0; i--) {
          if ($location.path() == $scope.sifrarnici[i] ){
            return true;
          }
        };

      }


  });
