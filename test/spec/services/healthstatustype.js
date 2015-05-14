'use strict';

describe('Service: HealthStatusType', function () {

  // load the service's module
  beforeEach(module('unicefApp'));

  // instantiate service
  var HealthStatusType;
  beforeEach(inject(function (_HealthStatusType_) {
    HealthStatusType = _HealthStatusType_;
  }));

  it('should do something', function () {
    expect(!!HealthStatusType).toBe(true);
  });

});
