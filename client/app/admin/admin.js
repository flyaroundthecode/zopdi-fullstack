'use strict';

angular.module('zetaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        authenticate: true,
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Admin'
        }
      });
  });
