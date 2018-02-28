(function() {
    'use strict';

    angular
        .module('AppBasic.main')
        .config(appRun);

    appRun.$inject = ['$stateProvider'];

    function appRun($stateProvider) {
        
        $stateProvider.state('main', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'mm'
        });
        
    }
})();
