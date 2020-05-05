    'use strict';
    /* */
    /* */
    // Register `testList` component, along with its associated controller and template
    angular.
      module('jsonList').
      component('jsonList', {
        templateUrl: 'app/json-list/json-list.template.html',
        controller: ['$http', '$scope','$timeout',
          function jsonListController($http,$scope,$timeout) {
             
          var vm = this;
          vm.testvar = 3;
          vm.template = "";
          vm.copied = false; 
          vm.copy = true; 
              
          vm.test = function test() {
            vm.copied = true; 
            vm.copy = false; 
            $timeout(callAtTimeout, 1000);
           };
          function callAtTimeout (){
             vm.copied = false; 
             vm.copy = true;
          };
              
          vm.template1 = `{
            "students": [
                {{#repeat `+vm.testvar+`}}
                {
                  "id": {{@index}},
                  "student_ID": {{int 10  100}}{{int 500  600}},
                  "name": "{{firstName}} {{lastName}}",
                  "university": "{{city}} University",
                  "email": "{{email}}",
                  "dob": "{{date '1900' '2005' 'YYYY'}}",
                  "address": "{{int 1 100}} {{street}}",
                  "city": "{{city}}",
                  "graduated": {{boolean}}
                }
                {{/repeat}}
              ]
} `;
                 vm.template2 = `{
            "Users": [
                {{#repeat `+vm.testvar+`}}
                {
                  "id": {{@index}},
                  "user_ID": {{int 500  600}}{{int 10  100}},
                  "name": "{{firstName}} {{lastName}}",
                  "work": "{{company}}",
                  "email": "{{email}}",
                  "dob": "{{date '1900' '2005' 'YYYY'}}",
                  "address": "{{int 1 100}} {{street}}",
                  "city": "{{city}}",
                  "alumni": {{boolean}}
                }
                {{/repeat}}
              ]
              "coordinates": {
                "x": {{float -50 50 '0.00'}},
                "y": {{float -25 25 '0.00'}}
              }
} `;
                 vm.template3 = `{
            "thirdtemplate": [
                {{#repeat `+vm.testvar+`}}
                {
                  "id": {{@index}},
                  "student_ID": {{int 10  100}}{{int 500  600}},
                  "name": "{{firstName}} {{lastName}}",
                  "work": "{{company}}",
                  "email": "{{email}}",
                  "dob": "{{date '1900' '2005' 'YYYY'}}",
                  "address": "{{int 1 100}} {{street}}",
                  "city": "{{city}}",
                  "graduated": {{boolean}}
                }
                {{/repeat}}
              ]
              "coordinates": {
                "x": {{float -50 50 '0.00'}},
                "y": {{float -25 25 '0.00'}}
              }
} `;
              
           vm.loadstudenttemp = function loadstudenttemp() {
               vm.template = vm.template1;
           }
           vm.loaduserstemp = function loaduserstemp() {
               vm.template = vm.template2;
           }
           vm.loadthirdtemp = function loadthirdtemp() {
               vm.template = vm.template3;
           }
          vm.randomize = function randomize() {
            //vm.template = JSON.stringify(vm.template);
            var request = JSON.stringify({type:"user", username:"ismail", template:vm.template}); 
            
        
            $http(
            {
               method: 'POST',
               url: 'app/jsonList',  /* URL to post*/
               data: request  /*You data object/class to post*/
            }).then(function successCallback(response) {
               // this callback will be called asynchronously when the response is available
                //console.log(response);
                //vm.template = JSON.stringify(response);
                vm.result = response.data;

            }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
            });

 };
              
             
          }
        ]
      });
