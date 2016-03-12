(function() {
    'use strict';

    angular.module('angularFormsApp').controller("HomeController",
        function ($scope, $location, $uibModal, DataService) {
            $scope.showCreateNewEmployeeForm = function () {
                $uibModal.open({
                    templateUrl: "app/EmployeeForm/efTemplate.html",
                    controller: "efController",
                    resolve: {
                        employeeId: function () {
                            return undefined;
                        }
                    }
                });
            };
            $scope.showUpdateEmployeeForm = function(employeeId) {
                $uibModal.open({
                    templateUrl: "app/EmployeeForm/efTemplate.html",
                    controller: "efController",
                    resolve: {
                        employeeId: function () {
                            return employeeId;
                        }
                    }
                });
            };
            $scope.getEmployees = DataService.getEmployees;
        });
})();
