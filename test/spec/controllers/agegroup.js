'use strict';

describe('Controller: AgegroupCtrl', function () {

  // load the controller's module
  beforeEach(module('unicefApp'));

  var AgegroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgegroupCtrl = $controller('AgegroupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
