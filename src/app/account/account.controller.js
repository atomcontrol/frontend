'use strict';
angular.module('app')
.controller('RestrictedController', ['$rootScope', '$scope', 'ApiRest','$localStorage', function ($rootScope, $scope, ApiRest,$localStorage) {
    ApiRest.one('users/me').get().then(function(data) {
      $scope.me = data;
    });
  }]);
