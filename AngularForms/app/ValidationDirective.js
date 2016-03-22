﻿(function() {
    
    'use strict';

    angular.module('angularFormsApp')
        .directive('showErrors', function($timeout) {

        return {
            restrict: 'A',
            require: '^form',
            link: function(scope, el, attr, formCtrl) {

                // find the text box element, which has the 'name' attribute
                var inputEl = el[0].querySelector("[name]");

                // convert the native text box element to an angular element
                var inputNgEl = angular.element(inputEl);

                // get the name on the text box so we know the property to check
                // on the form controller
                var inputName = inputNgEl.attr('name');

                // only apply the has-error class after the user leaves the text 
                inputNgEl.bind('blur', function() {
                    el.toggleClass('has-error', formCtrl[inputName].$invalid);
                });

                scope.$on('show-errors-event', function () {
                    el.toggleClass('has-error', formCtrl[inputName].$invalid);
                });

                scope.$on('hide-errors-event', function() {
                    //timeout lets angular finish first, avoiding a race condition
                    $timeout(function () {
                        el.removeClass('has-error');
                    }, 0, false);
                });
            }
        };
    });

})();
