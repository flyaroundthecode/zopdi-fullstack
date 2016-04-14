'use strict';

angular.module('zetaApp')
  .value('roleConfig', {
    'roles': [{
        'id': 'admin',
        'viewName': 'Admin'
    }, {
        'id': 'user',
        'viewName': 'User'
    }] 
  });
