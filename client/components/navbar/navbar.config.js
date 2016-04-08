'use strict';

angular.module('zetaApp')
  .value('navbarConfig', {
    'home': {
        'viewName': 'HOME',
        'uiSref': 'home',
        'targetUrl': '/',
        'iconClass': 'menu-icons fa fa-home'
    },
    'aboutus': {
        'viewName': 'ABOUT US',
        'targetUrl': '#',
        'iconClass': 'menu-icons fa fa-user',
        'isSubNavVisible': false,
        'subNav': [
            {
                'viewName': 'OUR TEAM',
                'uiSref': 'our-team',
                'targetUrl': '#/about'
            },
            {
                'viewName': 'OUR SERVICES',
                'uiSref': 'our-services',
                'targetUrl': '#'
            }
        ]
    },
    'portfolio': {
        'viewName': 'PORTFOLIO',
        'targetUrl': '#',
        'iconClass': 'menu-icons  fa fa-briefcase',
        'isSubNavVisible': false,
        'subNav': [
            {
                'viewName': 'WEB DESIGN',
                'uiSref': 'web-design',
                'targetUrl': '#'
            },
            {
                'viewName': 'GRAPHIC DESIGN',
                'uiSref': 'graphic-design',
                'targetUrl': '#'
            }
        ]
    },
    'contact': {
        'viewName': 'CONTACT',
        'targetUrl': '#',
        'iconClass': 'menu-icons fa fa-envelope'
    }
  });
