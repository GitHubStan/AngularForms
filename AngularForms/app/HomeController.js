angular.module('angularFormsApp').controller("HomeController",
    function ($scope, $location) {
        $scope.addNewEmployee = function () {
            $location.path('/newEmployeeForm');
        };
    });