'use strict';

describe('Controller: PurecssCtrl', function () {

  // load the controller's module
  beforeEach(module('cssradialApp'));

  var PurecssCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PurecssCtrl = $controller('PurecssCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PurecssCtrl.awesomeThings.length).toBe(3);
  });
});
