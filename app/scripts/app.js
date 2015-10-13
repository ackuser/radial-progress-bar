'use strict';

/**
 * @ngdoc overview
 * @name cssradialApp
 * @description
 * # cssradialApp
 *
 * Main module of the application.
 */
angular
  .module('cssradialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/progressbar', {
        templateUrl: 'views/progressbar.html',
        controller: 'ProgressbarCtrl',
        controllerAs: 'progressbar'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
