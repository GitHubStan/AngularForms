﻿(function() {
    'use strict';

    angular.module('angularFormsApp').controller("HomeController",
        function ($scope, $location, DataService) {
            $scope.showCreateNewEmployeeForm = function () {
                $location.path('/newEmployeeForm');
            };
            $scope.showUpdateEmployeeForm = function(employeeId) {
                $location.path('/updateEmployeeForm/' + employeeId);
            };
            $scope.getEmployees = DataService.getEmployees;
        });
})();
