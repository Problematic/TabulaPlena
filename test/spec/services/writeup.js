'use strict';

describe('Service: writeup', function () {

  // load the service's module
  beforeEach(module('TabulaPlenaApp'));

  // instantiate service
  var writeup;
  beforeEach(inject(function (_writeup_) {
    writeup = _writeup_;
  }));

  it('should do something', function () {
    expect(!!writeup).toBe(true);
  });

});
