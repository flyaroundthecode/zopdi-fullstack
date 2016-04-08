'use strict';

angular.module('zetaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        authenticate: true,
        ncyBreadcrumb: {
          label: 'Home'
        }
      });
  });
