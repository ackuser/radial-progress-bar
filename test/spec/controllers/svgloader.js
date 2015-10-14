'use strict';

describe('Controller: SvgloaderCtrl', function () {

  // load the controller's module
  beforeEach(module('cssradialApp'));

  var SvgloaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SvgloaderCtrl = $controller('SvgloaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SvgloaderCtrl.awesomeThings.length).toBe(3);
  });
});
