'use strict';

/**
 * @ngdoc overview
 * @name habcatAngularApp
 * @description
 * # habcatAngularApp
 *
 * Main module of the application.
 */
angular
  .module('habcatAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

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
      .when('/habstar/:id', {
        templateUrl: 'views/habstar.html',
        controller: 'HabstarCtrl',
        controllerAs: 'habstar'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
