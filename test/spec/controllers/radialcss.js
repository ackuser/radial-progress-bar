'use strict';

describe('Controller: RadialcssCtrl', function () {

  // load the controller's module
  beforeEach(module('cssradialApp'));

  var RadialcssCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RadialcssCtrl = $controller('RadialcssCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RadialcssCtrl.awesomeThings.length).toBe(3);
  });
});
