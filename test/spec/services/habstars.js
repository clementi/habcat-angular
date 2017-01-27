'use strict';

describe('Service: Habstars', function () {

  // load the service's module
  beforeEach(module('habcatAngularApp'));

  // instantiate service
  var Habstars;
  beforeEach(inject(function (_Habstars_) {
    Habstars = _Habstars_;
  }));

  it('should do something', function () {
    expect(!!Habstars).toBe(true);
  });

});
