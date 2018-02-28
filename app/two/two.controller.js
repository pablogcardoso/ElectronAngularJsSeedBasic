/**
 * @ngdoc controller 
 * @name two.controller:TwoController
 * @description
 * Example two module
 */
(function() {
    'use strict';
    angular
        .module('AppBasic.two')
        .controller('TwoController', TwoController);

    TwoController.$inject = ['$state','$scope'];
    function TwoController($state, $scope) {

        var mm = this;
        $scope.title = "(Two) Module it running";
     
    };

})();
