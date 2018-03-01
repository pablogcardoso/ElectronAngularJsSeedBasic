(function () {
    'use strict';
    angular.module('AppBasic').directive('codeMirror', [function () {
        // Runs during compile
        return {
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            
            scope: {
                content: "=",
                titleEditor: "="
            },

            link: function ($scope, iElm, iAttrs, controller) {
                $scope.surname = "";
            },
            compile:function(){
                
            },
            templateUrl: 'code-mirror.html'
        };
    }]);
})();