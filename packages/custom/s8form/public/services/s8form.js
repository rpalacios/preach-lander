(function () {
  'use strict';

  function S8form($http, $q) {
    return {
      name: 's8form',
      list: null,
      checkCircle: function (circle) {
        var deferred = $q.defer();

        $http.get('/api/s8form/example/' + circle).success(function (response) {
          deferred.resolve(response);
        }).error(function (response) {
          deferred.reject(response);
        });
        return deferred.promise;

      }
    };
  }

  angular
    .module('mean.s8form')
    .factory('S8form', S8form);

  S8form.$inject = ['$http', '$q'];

})();
