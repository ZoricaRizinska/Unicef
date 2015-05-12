'use strict';

describe('Controller: HealtstatustypeCtrl', function () {

  // load the controller's module
  beforeEach(module('unicefApp'));

  var HealtstatustypeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HealtstatustypeCtrl = $controller('HealtstatustypeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
