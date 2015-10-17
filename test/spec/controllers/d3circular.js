'use strict';

describe('Controller: D3circularCtrl', function () {

  // load the controller's module
  beforeEach(module('cssradialApp'));

  var D3circularCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    D3circularCtrl = $controller('D3circularCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(D3circularCtrl.awesomeThings.length).toBe(3);
  });
});
