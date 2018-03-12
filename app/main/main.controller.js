/**
 * @ngdoc controller 
 * @name login.controller:LoginController
 * @description
 * Example main app module
 */
(function() {
    'use strict';
    angular
        .module('AppBasic.main')
        .controller('MainController', Main);

    Main.$inject = ['$state','$scope'];
    function Main($state, $scope) {

        var mm = this;
        $scope.title = "(Main) Module it running";
        //document.write(process.versions.node)
    };

})();
