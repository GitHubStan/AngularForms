(function() {
    'use strict';

    angular.module('angularFormsApp').config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/Home.html",
                controller: "HomeController"
            })
            .when("/newEmployeeForm", {
                templateUrl: "app/EmployeeForm/efTemplate.html",
                controller: "efController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    });
})();

