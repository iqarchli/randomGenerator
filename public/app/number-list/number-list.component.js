    'use strict';
    /* */
    /* */
    // Register `numberList` component, along with its associated controller and template
    angular.
      module('numberList').
      component('numberList', {
        templateUrl: 'app/number-list/number-list.template.html',
        controller: ['$http', '$scope',
          function numberListController($http,$scope) {
             
              var vm = this; 

               vm.delimiter="\\n";
             
          }
        ]
      });
