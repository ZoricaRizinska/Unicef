'use strict';

/**
 * @ngdoc service
 * @name unicefApp.login
 * @description
 * # loginService
 * Factory in the unicefApp.
 */
angular.module('unicefApp')
  .factory('loginService', function () {
    return {
      login: function (username, password) {
        console.log("call loginApi with this credentials", username ," and ", password);
        return username;
      }

    };
  });
