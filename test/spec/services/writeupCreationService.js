'use strict';

describe('Service: writeupCreationService', function () {

  // load the service's module
  beforeEach(module('TabulaPlenaApp'));

  // instantiate service
  var writeupCreationService;
  beforeEach(inject(function (_writeupCreationService_) {
    writeupCreationService = _writeupCreationService_;
  }));

  it('should do something', function () {
    expect(!!writeupCreationService).toBe(true);
  });

});
