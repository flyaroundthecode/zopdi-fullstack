'use strict';

angular.module('zetaApp')
  .controller('NavbarCtrl', function ($scope, Auth, navbarConfig) {
    /*$scope.menu = [{
      'title': 'Home',
      'state': 'main'
    }];*/

    //$scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;


    $scope.navbarConfig = navbarConfig;

    $scope.navSelectionHandler = function(navItem, navDetails) {
      $scope.selectedNavItem = navItem;
      if(angular.isUndefined(navDetails.subNav)) {
        $rootScope.isNavVisible = !$scope.isNavVisible;
      }
      if(angular.isDefined(navDetails.isSubNavVisible)) {
        navDetails.isSubNavVisible = !navDetails.isSubNavVisible;
      }
    };

    $scope.subNavSelectionHandler = function($event) {
      $event.stopPropagation();
      $rootScope.isNavVisible = !$scope.isNavVisible;
    };
  });
