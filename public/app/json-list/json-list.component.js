    'use strict';
    /* */
    /* */
    // Register `testList` component, along with its associated controller and template
    angular.
      module('jsonList').
      component('jsonList', {
        templateUrl: 'app/json-list/json-list.template.html',
        controller: ['$http', '$scope',
          function jsonListController($http,$scope) {
             
              var vm = this;
              vm.template = '{\
                "name": {{firstName}},\
                "age": {{int 18 65}}\
              }';
             
              //vm.template = JSON.stringify(vm.template);

              vm.getRandJson=function(){
                console.log(vm.template);
                $http.post('app/jsonList',vm.template).then(function(data){
                  console.log(data);
                })
              } 

              
             
          }
        ]
      });
