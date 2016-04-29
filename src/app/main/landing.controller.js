angular.module('app')
.controller('LandingController', ['$rootScope', '$scope', '$location', 'ApiRest','ngToast',
	function($rootScope, $scope, $location, ApiRest, ngToast) {
		$scope.range = function(n) {
        return new Array(n);
    };
	}
]);
