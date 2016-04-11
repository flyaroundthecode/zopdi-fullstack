'use strict';

angular.module('zetaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('web-design', {
        url: '/web-design',
        templateUrl: 'app/portfolio/web-design.html',
        controller: 'WebDesignCtrl',
        authenticate: true,
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Web Design'
        }
      })
      .state('graphic-design', {
        url: '/graphic-design',
        templateUrl: 'app/portfolio/graphic-design.html',
        controller: 'GraphicDesignCtrl',
        authenticate: true,
        ncyBreadcrumb: {
          parent: 'web-design',
          label: 'Graphic Design'
        }
      });
  });