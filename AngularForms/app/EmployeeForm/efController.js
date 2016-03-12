(function() {

    'use strict';

    angular.module('angularFormsApp').controller('efController',['$scope', '$window', '$routeParams', '$uibModalInstance', 'employeeId', 'DataService',
        function efController($scope, $window, $routeParams, $uibModalInstance, employeeId, DataService) {

            if (employeeId !== undefined) {
                $scope.employee = DataService.getEmployee(employeeId);
            } else {
                $scope.employee = { id: undefined };
            }
            
            $scope.editableEmployee = angular.copy($scope.employee);

            $scope.departments = ['Engineering', 'Marketing', 'Finance', 'Administration'];

            $scope.submitForm = function () {

                if ($scope.editableEmployee.id === undefined) {
                    DataService.insertEmployee($scope.editableEmployee);
                } else {
                    DataService.updateEmployee($scope.editableEmployee);
                }

                $scope.employee = angular.copy($scope.editableEmployee);
                $uibModalInstance.close();
            };

            $scope.cancelForm = function () {
                $uibModalInstance.dismiss();
            };
        }]);
})();
