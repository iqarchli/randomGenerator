    'use strict';
    /* */
    /* */
    // Register `testList` component, along with its associated controller and template
    angular.
      module('jsonList').
      component('jsonList', {
        templateUrl: 'app/json-list/json-list.template.html',
        controller: ['$http', '$scope','$timeout','$window',
          function jsonListController($http,$scope,$timeout,$window) {
             
          var vm = this;
          vm.depth =5 ;
          vm.template = "";
          vm.copied = false; 
          vm.copy = true; 
          vm.enableDown=true;

          

          vm.test = function test() {
            vm.copied = true; 
            vm.copy = false; 
            $timeout(callAtTimeout, 1000);
           };
            
          function callAtTimeout (){
             vm.copied = false; 
             vm.copy = true;
          };
        
            vm.updatedepth = function updatedepth(){
                debugger;
                vm.repeat = vm.depth;
            };
              
          vm.template1 = `{
            "students": [
                {{#repeat `+vm.depth+`}}
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
                {{#repeat `+vm.depth+`}}
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
                {{#repeat `+vm.depth+`}}
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
          vm.alertt = function alertt (){
            Swal.fire({
              title: 'Info!',
              html:
            '<p style="text-align:justify;">'+
            'This is a utility that allows you to generate random JSON data. It comes with a built-in collection of Handlebars helpers that return common data values, such as names, numbers, dates.<br>' +
            '<b>Available Helpers</b><br>' +
            '<i><b>Repeat </b>{{#repeat count [comma=true]}} ... {{/repeat}} </i> <br>'+
            '• count The number of times to repeat the content (required) <br>'+
            '• comma Adds or removes the separating comma between blocks of content (optional, default is true)  <br>'+
            '<i><b>Integer </b>{{int min max [format] [round=1]}}</i><br>' +
            '• min Minimum value (required)<br>'+
            '• max Maximum value (required)<br>'+
            '• format Formatting string (optional, default is null)<br>'+
            '• round Rounds to the nearest multiple of the given value (optional, default is null - no rounding)<br>'+
            '<i><b>Float </b>{{float min max [format] [round=1]}}</i><br>' +
            '• min Minimum value (required)<br>'+
            '• max Maximum value (required)<br>'+
            '• format Formatting string (optional, default is null)<br>'+
            '• round Rounds to the nearest multiple of the given value (optional, default is null - no rounding)<br>'+
            '<i><b>Date </b>{{date  min max [format]</i><br>' +
            '• min Minimum value (required)<br>'+
            '• max Maximum value (required)<br>'+
            '• format Formatting string (optional, default is null)<br></p>',
            
              icon: 'info',
              confirmButtonText: 'Got it!'
            })
          }
           vm.loadstudenttemp = function loadstudenttemp() {
               //vm.repeat = vm.depth;
               vm.template = vm.template1;
           }
           vm.loaduserstemp = function loaduserstemp() {
               vm.template = vm.template2;
           }
           vm.loadthirdtemp = function loadthirdtemp() {
               vm.template = vm.template3;
           }
           //vm.telokat
          vm.randomize = function randomize() {
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
                vm.enableDown=false;
                vm.result = response.data;
                var data = vm.result,
                blob = new Blob([vm.result], { type: 'text/plain' }),
                url = $window.URL || $window.webkitURL;
                vm.fileUrl = url.createObjectURL(blob);

            }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
            });

 };
              
             
          }
        ]
      });
