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
    'ngTouch',
    'angular-svg-round-progress'
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
      .when('/radialcss', {
        templateUrl: 'views/radialcss.html',
        controller: 'RadialcssCtrl',
        controllerAs: 'radialcss'
      })
      .when('/angularsvg', {
        templateUrl: 'views/angularsvg.html',
        controller: 'AngularsvgCtrl',
        controllerAs: 'angularsvg'
      })
      .when('/purecss', {
        templateUrl: 'views/purecss.html',
        controller: 'PurecssCtrl',
        controllerAs: 'purecss'
      })
      .when('/svg', {
        templateUrl: 'views/svg.html',
        controller: 'SvgCtrl',
        controllerAs: 'svg'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
