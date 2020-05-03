    'use strict';
    /* */
    /* */
    // Register `testList` component, along with its associated controller and template
    angular.
      module('stringList').
      component('stringList', {
        templateUrl: 'app/string-list/string-list.template.html',
        controller: ['$http', '$scope',
          function stringListController($http,$scope) {
             
            var vm = this;
            vm.disChar = true;
            
            
            vm.options = [
              {name:'Lower Case', id:1},
              {name:'Upper Case', id:2},
              {name:'Lower Case [a-z] & numbers', id:3},
              {name:'All letters [a-zA-Z] & numbers', id:4},
              {name:'All letters [a-z.A-Z]', id:5},
              {name:'Digits [0-9]', id:5},
              {name:'Custom', id:6}
            ];
            vm.strOpt = 6;
              
           vm.setTest = function setTest() {
            if(vm.strOpt.id == 6)
                vm.disChar = false;
            else
                vm.disChar = true;
           };
              
          }
        
        ]
      });
