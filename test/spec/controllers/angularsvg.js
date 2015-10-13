'use strict';

describe('Controller: AngularsvgCtrl', function () {

  // load the controller's module
  beforeEach(module('cssradialApp'));

  var AngularsvgCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularsvgCtrl = $controller('AngularsvgCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AngularsvgCtrl.awesomeThings.length).toBe(3);
  });
});
