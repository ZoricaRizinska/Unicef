'use strict';

describe('Controller: NationalityCtrl', function () {

  // load the controller's module
  beforeEach(module('unicefApp'));

  var NationalityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NationalityCtrl = $controller('NationalityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
