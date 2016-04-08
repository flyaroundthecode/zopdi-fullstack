'use strict';

angular.module('zetaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('our-services', {
        url: '/our-services',
        templateUrl: 'app/about-us/our-services.html',
        controller: 'OurServicesCtrl',
        authenticate: true,
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Our Services'
        }
      })
      .state('our-team', {
        url: '/our-team',
        templateUrl: 'app/about-us/our-team.html',
        controller: 'OurTeamCtrl',
        authenticate: true,
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Our Team'
        }
      });
  });
