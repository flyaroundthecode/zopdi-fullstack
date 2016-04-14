'use strict';

angular.module('zetaApp')
  .controller('SignupCtrl', function($scope, Auth, roleConfig, $state) {
    $scope.user = {};
    $scope.errors = {};
    $scope.success = {};
    $scope.roleConfig = roleConfig;

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.isSuccessMsgVisible = false;

    $scope.register = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          role: $scope.user.role || 'user'
        })
        .then(function(user) {
          // Account created, redirect to home
          //$state.go('home');
          $scope.user = {};
          $scope.submitted = false;
          $scope.success = {
            registration: 'User with email ' + user.email + ' registered successfully'
          };
          $scope.isSuccessMsgVisible = true;
        })
        .catch(function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

  });
