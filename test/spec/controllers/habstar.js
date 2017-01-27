'use strict';

describe('Controller: HabstarCtrl', function () {

  // load the controller's module
  beforeEach(module('habcatAngularApp'));

  var HabstarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HabstarCtrl = $controller('HabstarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HabstarCtrl.awesomeThings.length).toBe(3);
  });
});
