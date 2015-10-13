'use strict';

describe('Controller: ProgressbarCtrl', function () {

  // load the controller's module
  beforeEach(module('cssradialApp'));

  var ProgressbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgressbarCtrl = $controller('ProgressbarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProgressbarCtrl.awesomeThings.length).toBe(3);
  });
});
