'use strict';

describe('Service: writeupService', function () {

  // load the service's module
  beforeEach(module('TabulaPlenaApp'));

  // instantiate service
  var writeupService;
  beforeEach(inject(function (_writeupService_) {
    writeupService = _writeupService_;
  }));

  it('should do something', function () {
    expect(!!writeupService).toBe(true);
  });

});
