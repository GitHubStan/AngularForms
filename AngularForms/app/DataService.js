(function() {
    'use strict';

    angular.module('angularFormsApp').factory('DataService',
        function () {
            var employee = {
                fullName: "Milton Waddams",
                notes: "The ideal employee.  Just don't touch his red stapler.",
                department: "Administration",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            }

            return { employee: employee };
        });
})();

