'use strict';

describe('Controller: CitizenshipCtrl', function () {

  // load the controller's module
  beforeEach(module('unicefApp'));

  var CitizenshipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CitizenshipCtrl = $controller('CitizenshipCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
