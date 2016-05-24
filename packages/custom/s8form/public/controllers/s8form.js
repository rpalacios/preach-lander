(function() {
    'use strict';

    /* jshint -W098 */

    function S8formController($scope, Global, S8form, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 's8form'
        };

        $scope.checkCircle = function() {
            S8form.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.s8form')
        .controller('S8formController', S8formController);

    S8formController.$inject = ['$scope', 'Global', 'S8form', '$stateParams'];

})();
