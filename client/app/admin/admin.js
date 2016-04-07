'use strict';

angular.module('zetaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.admin', {
        url: 'admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        authenticate: true
      });
  });
