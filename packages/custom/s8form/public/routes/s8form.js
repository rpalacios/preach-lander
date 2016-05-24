(function() {
    'use strict';

    function S8form($stateProvider) {
        $stateProvider.state('s8form example page', {
            url: '/s8form/example',
            templateUrl: 's8form/views/index.html'
        }).state('s8form circles example', {
            url: '/s8form/example/:circle',
            templateUrl: 's8form/views/example.html'
        }).state('s8form index', {
          url: '/s8form',
          templateUrl: 's8form/views/index.html'
        }).state('s8form s8form add', {
          url: '/s8form/add',
          templateUrl: 's8form/views/s8form/add.html'
        }).state('s8form sector add', {
          url: '/s8form/add',
          templateUrl: 's8form/views/sector/add.html'
        }).state('s8form territory add', {
          url: '/s8form/add',
          templateUrl: 's8form/views/territory/add.html'
        });
    }

    angular
        .module('mean.s8form')
        .config(S8form);

    S8form.$inject = ['$stateProvider'];

})();
