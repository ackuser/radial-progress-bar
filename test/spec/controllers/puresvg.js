'use strict';

describe('Controller: PuresvgCtrl', function () {

  // load the controller's module
  beforeEach(module('cssradialApp'));

  var PuresvgCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PuresvgCtrl = $controller('PuresvgCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PuresvgCtrl.awesomeThings.length).toBe(3);
  });
});
