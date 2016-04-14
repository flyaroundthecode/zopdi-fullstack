'use strict';

angular.module('zetaApp')
  .directive('flashAlert', function ($timeout) {
    return {
      template: '<div ng-show="isMessageVisible" class="zeta-flash-alert">{{message}}</div>',
      restrict: 'E',
      replace: true,
      scope: {
      	message: '@',
      	isMessageVisible: '='
      },
      link: function(scope, element, attr) {
      	scope.$watch('isMessageVisible', function(newValue, oldValue){
      		console.log('newVal:', newValue);
      		console.log('oldVal:', oldValue);
      		if(newValue !== oldValue && newValue === true) {
      			$timeout(function (){
            		scope.isMessageVisible = false;
            	}, 5000);
      		}
      	});

      	scope.$watch(attr.message, function(newValue, oldValue){
      		scope.message = newValue;
      	});
      }
    };
  });
