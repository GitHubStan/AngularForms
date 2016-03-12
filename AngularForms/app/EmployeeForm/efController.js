(function() {

    'use strict';

    angular.module('angularFormsApp').controller('efController', function efController($scope, $window, DataService) {

        $scope.employee = DataService.employee;
        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = ['Engineering', 'Marketing', 'Finance', 'Administration'];


        $scope.submitForm = function () {
            DataService.employee = angular.copy($scope.editableEmployee);
            $window.history.back();
        };

        $scope.cancelForm = function () {
            $window.history.back();
        };
    });
})();
