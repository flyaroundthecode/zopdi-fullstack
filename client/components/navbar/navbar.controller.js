'use strict';

angular.module('zetaApp')
  .controller('NavbarCtrl', function ($scope, Auth, navbarConfig, $rootScope) {
    
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

    $scope.shouldNavItemVisible = function(navDetails) {
      if(angular.isDefined(navDetails.accessLevel) && navDetails.accessLevel.indexOf($scope.getCurrentUser().role) > -1) {
        return true;
      } else if(angular.isUndefined(navDetails.accessLevel)) {
        return true;
      } else {
        return false;
      }
    };
  });
