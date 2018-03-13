/**
* This directive show menu on the top.
*       ATENTION: IS NOT IMPLEMENTED YET
*
* @todo: Compile function, link function, html
*/
(function () {
    'use strict';
    angular.module('AppBasic').directive('menuTop', [function () {
        // Runs during compile
        return {
            restrict: 'E', 
            
            scope: {
                user: "@",//flag
                login: "@",//flag
                title: "=",//flag
                externalCallback = '&'
            },

            link: function ($scope, iElm, iAttrs, controller) {
                $scope.title = "";
            },
            compile:function(){
                $scope.goToActionMenu = function(action){
                    $scope.externalCallback(action);
                };
               
            },
            templateUrl: 'menu-top.directive.html'
        };
    }]);
})();
