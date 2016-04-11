'use strict';

angular.module('zetaApp')
  .controller('WebDesignCtrl', function($scope) {

  	$scope.layouts = {};
    $scope.layouts.availableLayouts = [{
    	id: '1-column-layout',
    	className: 'col-md-12',
    	viewName: '1 column layout'
    }, {
    	id: '2-column-layout',
    	className: 'col-md-6',
    	viewName: '2 column layout'
    }, {
    	id: '3-column-layout',
    	className: 'col-md-4',
    	viewName: '3 column layout'
    }];
  });