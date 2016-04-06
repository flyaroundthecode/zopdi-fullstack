'use strict';

angular.module('zetaApp')
  .directive('fixedHeader', function () {
    return {
      templateUrl: 'components/fixed-header/fixed-header.html',
      restrict: 'E',
      controller: 'FixedHeaderCtrl'
    };
  });