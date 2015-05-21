'use strict';

/**
 * @ngdoc overview
 * @name unicefApp
 * @description
 * # unicefApp
 *
 * Main module of the application.
 */
angular
  .module('unicefApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'daterangepicker',
    'ui.bootstrap',
    'angular-loading-bar',
    'ui.select2',
    'ngMask',
    'chart.js',
    'ui.checkbox',
    'angular-md5',
    'toastr',
    'ngTable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/healtstatustype', {
        templateUrl: 'views/healtstatustype.html',
        controller: 'HealtstatustypeCtrl'
      })
      .when('/citizenship', {
        templateUrl: 'views/citizenship.html',
        controller: 'CitizenshipCtrl'
      })
      .when('/studyperiod', {
        templateUrl: 'views/studyperiod.html',
        controller: 'StudyperiodCtrl'
      })
      .when('/agegroup', {
        templateUrl: 'views/agegroup.html',
        controller: 'AgegroupCtrl'
      })
      .when('/basicgroup', {
        templateUrl: 'views/basicgroup.html',
        controller: 'BasicgroupCtrl'
      })
      .when('/municipality', {
        templateUrl: 'views/municipality.html',
        controller: 'MunicipalityCtrl'
      })
      .when('/forgotpassword', {
        templateUrl: 'views/forgotpassword.html',
        controller: 'ForgotpasswordCtrl'
      })
      .when('/financesourcetype', {
        templateUrl: 'views/financesourcetype.html',
        controller: 'FinancesourcetypeCtrl'
      })
       .when('/position', {
        templateUrl: 'views/position.html',
        controller: 'PositionCtrl'
      })
      .when('/employee', {
        templateUrl: 'views/employee.html',
        controller: 'EmployeeCtrl'
      })
        .when('/kindergarden', {
        templateUrl: 'views/kindergarden.html',
        controller: 'KindergardenCtrl'
      })
        .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/nationality', {
        templateUrl: 'views/nationality.html',
        controller: 'NationalityCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 100;
  }]);

