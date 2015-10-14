'use strict';

describe('Controller: D3neonCtrl', function () {

  // load the controller's module
  beforeEach(module('cssradialApp'));

  var D3neonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    D3neonCtrl = $controller('D3neonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(D3neonCtrl.awesomeThings.length).toBe(3);
  });
});
