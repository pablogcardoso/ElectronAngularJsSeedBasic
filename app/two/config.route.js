(function() {
    'use strict';

    angular
        .module('AppBasic.two')
        .config(appRun);

    appRun.$inject = ['$stateProvider'];

    function appRun($stateProvider) {
        
        $stateProvider.state('two', {
            url: '/two',
            templateUrl: 'app/two/two.html',
            controller: 'TwoController',
            controllerAs: 'tt'
        });
        
    }
})();
