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
                "age": {{int 18 65}},\
                "lastname": {{lastName}},\
              }';
              
              
              
             
      
          /* */       

            vm.template = `
 {
            "users": [
                {{#repeat 2}}
                {
                  "id": {{@index}},
                  "name": "{{firstName}} {{lastName}}",
                  "work": "{{company}}",
                  "email": "{{email}}",
                  "dob": "{{date '1900' '2000' 'YYYY'}}",
                  "address": "{{int 1 100}} {{street}}",
                  "city": "{{city}}",
                  "optedin": {{boolean}}
                }
                {{/repeat}}
              ],
              "images": [
                {{#repeat 3}}
                "img{{@index}}.png"
                {{/repeat}}
              ],
              "coordinates": {
                "x": {{float -50 50 '0.00'}},
                "y": {{float -25 25 '0.00'}}
              }
            } `;
      
              //vm.template = JSON.stringify(vm.template);
            var request = JSON.stringify({type:"user", username:"ismail", template:vm.template}); 
            
            $http(
            {
               method: 'POST',
               url: 'app/jsonList',  /*You URL to post*/
               data: request  /*You data object/class to post*/
            }).then(function successCallback(response) {
               // this callback will be called asynchronously
               // when the response is available
                console.log(response);

            }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.

            });

              
              
              
            //  vm.getRandJson=function(){
                
            //    $http.post('app/jsonList',vm.template).then(function(data){
            //    console.log(data);
            //    })
             // } 

              
             
          }
        ]
      });
