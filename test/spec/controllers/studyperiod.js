'use strict';

describe('Controller: StudyperiodCtrl', function () {

  // load the controller's module
  beforeEach(module('unicefApp'));

  var StudyperiodCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudyperiodCtrl = $controller('StudyperiodCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
