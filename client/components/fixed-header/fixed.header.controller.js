'use strict';

angular.module('zetaApp')
  .controller('FixedHeaderCtrl', function ($scope, $rootScope, Auth) {

    $rootScope.isNavVisible = false;
    
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.toggleNavigation = function(){
      $rootScope.isNavVisible = !$scope.isNavVisible;
    };
  });
