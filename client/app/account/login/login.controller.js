'use strict';

angular.module('zetaApp')
  .controller('LoginCtrl', function($scope, Auth, $state, isUserAuthenticated) {
    $scope.user = {};
    $scope.errors = {};

    if(isUserAuthenticated){
        $state.go('home');
    }

    $scope.login = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then(function() {
          // Logged in, redirect to home
          $state.go('home');
        })
        .catch(function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
