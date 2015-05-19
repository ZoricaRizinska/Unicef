'use strict';

describe('Controller: MunicipalityCtrl', function () {

  // load the controller's module
  beforeEach(module('unicefApp'));

  var MunicipalityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MunicipalityCtrl = $controller('MunicipalityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
