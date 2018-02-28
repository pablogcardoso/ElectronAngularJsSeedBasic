'use strict';
/**
 * @ngdoc overview 
 * @name app
 * @description
 * AppBasic example app.
 */
angular
    .module('AppBasic',
        ['ui.router',
        'AppBasic.main',
		'AppBasic.two'
        ]);

angular.module('AppBasic')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
       
    })
    /**
     * @ngdoc overview
     * @name run
     * @methodOf app
     * @description run actions before state.go is executed, use this method for
     * implement AUTH validations 
     * @param {object} $rootScope used to listen $stateChangeStart call
     * @param {object} $location get location object injection
     * @param {object} $state used for redirect to other pages
     */
    .run(function($rootScope, $location, $state) {

        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
           /* meke loggin redirection functions here....*/
        });
        
    });;
