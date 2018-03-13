/**
* This directive connect show tree menu.
*
*       ATENTION: IS NOT IMPLEMENTED YET
*
* @todo: Compile function, link function, html
*/
(function () {
    'use strict';
    angular.module('AppBasic').directive('menuTree', [function () {
        // Runs during compile
        return {
            restrict: 'E', 
            
            scope: {
                search:'@',
                theme:'@',
                title: "=",
                data:'=',
                externalCallback = '&',
                inData = '@'
            },

            link: function ($scope, iElm, iAttrs, controller) {
                $scope.title = "";
            },
            compile:function(){

                $scope.goToActionMenu = function(action){
                    if (inData != '' && inData == 'data'){
                        //load data with menu structure
                    }else if(inData != '' && inData == 'json'){
                        //load json with menu structure
                    }else if(inData != '' && inData == 'callback'){
                        //use external function for actions
                        $scope.externalCallback(action);
                    } else {

                    }
                };
                $scope.openTree = function(item){

                };
                $scope.closeTree = function(item){

                };
            },
            templateUrl: 'menu-tree.directive.html'
        };
    }]);
})();
