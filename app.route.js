(function () {
  'use strict'

  angular.module('app').config(config)
  

  config.$inject = ['$stateProvider', '$urlRouterProvider']

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app',{
        url: '/app',
        abstract: true,
        controller: 'AppController'
      })
      .state('login', {
        url: '/',
        controller: 'LoginController',
        templateUrl: 'view/login/login.html'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        params: ['id'],
        controller: 'DashboardController',
        templateUrl: 'view/dashboard/dashboard.html'
      })
    $urlRouterProvider.when('', '/')
    $urlRouterProvider.otherwise('/404')
  }
})()