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
        templateUrl: 'views/progressbar.html',
        controller: 'ProgressbarCtrl',
        controllerAs: 'progressbar'
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
      .when('/svgloader', {
        templateUrl: 'views/svgloader.html',
        controller: 'SvgloaderCtrl',
        controllerAs: 'svgloader'
      })
      .when('/d3neon', {
        templateUrl: 'views/d3neon.html',
        controller: 'D3neonCtrl',
        controllerAs: 'd3neon'
      })
      .when('/puresvg', {
        templateUrl: 'views/puresvg.html',
        controller: 'PuresvgCtrl',
        controllerAs: 'puresvg'
      })
      .when('/d3circular', {
        templateUrl: 'views/d3circular.html',
        controller: 'D3circularCtrl',
        controllerAs: 'd3circular'
      })
      .otherwise({
        redirectTo: '/progressbar'
      });
  });
