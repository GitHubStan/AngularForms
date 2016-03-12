(function() {
    'use strict';

    angular.module('angularFormsApp').controller("HomeController",
        function ($scope, $location, DataService) {
            $scope.addNewEmployee = function () {
                $location.path('/newEmployeeForm');
            };
        });
})();
