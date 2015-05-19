'use strict';

describe('Controller: BasicgroupCtrl', function () {

  // load the controller's module
  beforeEach(module('unicefApp'));

  var BasicgroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasicgroupCtrl = $controller('BasicgroupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
