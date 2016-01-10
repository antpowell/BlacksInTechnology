'use strict';

/**
 * @ngdoc overview
 * @name blacksApp
 * @description
 * # blacksApp
 *
 * Main module of the application.
 */
angular
  .module('blacksApp', [
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
      .when('/podcast', {
        templateUrl: 'views/podcast.html',
        controller: 'PodcastCtrl',
        controllerAs: 'podcast'
      })
      .when('/forums', {
        templateUrl: 'views/forums.html',
        controller: 'ForumsCtrl',
        controllerAs: 'forums'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
