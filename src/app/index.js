'use strict';
// create the module and name it app
// also include ngRoute for all our routing needs
var app = angular.module('app', ['ngStorage','ui.router','ngAnimate','restangular','ui.bootstrap','ngToast','angularMoment','ngFileUpload']);

// configure our routes
app.config(['$httpProvider','$locationProvider','$urlRouterProvider','$stateProvider', function ($httpProvider,$locationProvider, $urlRouterProvider,$stateProvider) {

    $stateProvider
    /**
     * PUBLIC PAGES
     */
        .state('home', {
            url: '/',
            templateUrl: 'app/main/landing.html',
            controller: 'LandingController'
        })
        .state('signin', {
            url: '/signin',
            templateUrl: 'app/main/signin.html',
            controller: 'HomeController'
        }).
        state('signup', {
            url: '/signup',
            templateUrl: 'app/main/signup.html',
            controller: 'HomeController'
        }).
      state('notfound', {
        templateUrl: 'app/main/errors/404.html'
      }).
      state('unauthorized', {
        templateUrl: 'app/main/errors/401.html'
      }).
    /**
     * USER SECTION
     */
      state('account', {
            url: '/account',
            templateUrl: 'app/account/account.html',
            controller: 'RestrictedController',
        data: {roles: 'user'}
      }).
      state('account-edit', {
        url: '/account/edit',
        templateUrl: 'app/account/edit.html',
        controller: 'AccountDetailController',
        data: {roles: 'user'}
      });

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise(function ($injector) {
      $injector.invoke(['$state', function ($state) { $state.go('notfound'); }]);
      return true;
    });
}]);
