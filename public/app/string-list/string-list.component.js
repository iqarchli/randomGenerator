    'use strict';
    // Register `testList` component, along with its associated controller and template
    angular.
      module('stringList').
      component('stringList', {
        templateUrl: 'app/string-list/string-list.template.html',
        controller: ['$http', '$scope','$timeout','$window',
          function stringListController($http,$scope,$timeout,$window) {
            var vm = this;
            vm.strlen =10;
            vm.numOfRes =10;
            vm.disChar = true;
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
             
            vm.options = [
              {name:'Lower Case', id:1},
              {name:'Upper Case', id:2},
              {name:'Lower Case [a-z] & numbers', id:3},
              {name:'All letters [a-zA-Z] & numbers', id:4},
              {name:'All letters [a-z.A-Z]', id:5},
              {name:'Digits [0-9]', id:6},
              {name:'Regular Expression', id:7}
            ];
            
            //vm.strOpt = 1;
           vm.setactive = function setactive() {
             
            if(vm.selectedName.id == 7)
                vm.disChar = false;
            else
                vm.disChar = true;
           };

           

           vm.alertt = function alertt (){
            Swal.fire({
              title: 'Regular Expressions!',
              html:
            '<p style="text-align:justify;">'+
            'This is a utility that allows you to generate random data based on Regular Expressions.<br>' +
            '<b>Basics</b><br>' +
            'A regular expression is a sequence of characters that define a search pattern.<br>'+
            
            '<table class="table">'+
              '<thead>'+
              '<tr>'+
              '<th scope="col">#</th>'+
              '<th scope="col">Expression</th>'+
              '<th scope="col">Example</th>'+
              '<th scope="col">Potential Output</th>'+
              '</tr>'+
              '</thead>'+
              '<tbody>'+
              '<tr>'+
              '<th scope="row">1</th>'+
              '<td>"or" |</td>'+
              '<td>gray|grey</td>'+
              '<td>"gray" or "grey"</td>'+
              '</tr>'+
              '<tr>'+
              '<th scope="row">2</th>'+
              '<td>Plus sign + </td>'+
              '<td>The plus sign indicates one or more occurrences of the preceding element.</td>'+
              '<td></td>'+
              '</tr>'+
              '<tr>'+
              '<th scope="row">3</th>'+
              '<td>Larry</td>'+
              '<td>the Bird</td>'+
              '<td>@twitter</td>'+
              '</tr>'+
              '</tbody>'+
              '</table>'+
            '<b>Boolean "or"</b><br>'+
            'A vertical bar separates alternatives. For example, gray|grey can match "gray" or "grey".<br>'+
            '<b>Grouping</b><br>'+
            '<b>?</b>: The question mark indicates zero or one occurrences of the preceding element. For example, colou?r matches both "color" and "colour".<br>'+
            '<b>*</b>: The asterisk indicates zero or more occurrences of the preceding element. For example, ab*c matches "ac", "abc", "abbc", "abbbc", and so on.<br>'+
            '<b>+</b>: The plus sign indicates one or more occurrences of the preceding element. For example, ab+c matches "abc", "abbc", "abbbc", and so on, but not "ac".<br>'+
            '<b>*</b>: The asterisk indicates zero or more occurrences of the preceding element. For example, ab*c matches "ac", "abc", "abbc", "abbbc", and so on.<br>',
            
              icon: 'question',
              confirmButtonText: 'Got it!'
            })
          }

          vm.download = function download(){
            var data = vm.result,
            blob = new Blob([vm.result], { type: 'text/plain' }),
            url = $window.URL || $window.webkitURL;
            vm.fileUrl = url.createObjectURL(blob);
          }

           //Randomize button action
           vm.randomize = function randomize() {
             if (vm.valueCheckRandLen == true)
             vm.strlen = Math.floor(Math.random() * 20)+1; 
             if (vm.valueCheckRandRes == true)
             vm.numOfRes = Math.floor(Math.random() * 10000)+1; 

             if (vm.strlen == undefined)
             vm.strlen=10;
             if(vm.selectedName === undefined){
              vm.selectedName = 
              {name:'Lower Case', id:1};
              
           }
           if (vm.numOfRes<=10000){
            switch(vm.selectedName.id){ 
              case 1: //lower Case
              vm.template = "([a-z]{"+vm.strlen+"}\n){"+vm.numOfRes+"}";
              var request = JSON.stringify({type:"user", username:"ismail", template:vm.template}); 
              $http(
              {
               method: 'POST',
               url: 'app/stringList',  /* URL to post*/
               data: request  /*You data object/class to post*/
              }).then(function successCallback(response) {
               // this callback will be called asynchronously when the response is available
                vm.result = response.data;
                vm.download();
                
              }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
              });
              break;
              case 2: //Upper Case
              vm.template = "([A-Z]{"+vm.strlen+"}\n){"+vm.numOfRes+"}";
              var request = JSON.stringify({type:"user", username:"ismail", template:vm.template}); 
              $http(
              {
               method: 'POST',
               url: 'app/stringList',  /* URL to post*/
               data: request  /*You data object/class to post*/
              }).then(function successCallback(response) {
               // this callback will be called asynchronously when the response is available
                vm.result = response.data;
                vm.download();

              }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
              });
              break; 
              case 3://Lower Case and numbers
              vm.template = "([a-z0-9]{"+vm.strlen+"}\n){"+vm.numOfRes+"}";
              var request = JSON.stringify({type:"user", username:"ismail", template:vm.template}); 
              $http(
              {
               method: 'POST',
               url: 'app/stringList',  /* URL to post*/
               data: request  /*You data object/class to post*/
              }).then(function successCallback(response) {
               // this callback will be called asynchronously when the response is available
                vm.result = response.data;
                vm.download();

              }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
              });
              break;
              case 4://All letters and numbers
              vm.template = "([a-zA-Z0-9]{"+vm.strlen+"}\n){"+vm.numOfRes+"}";
              var request = JSON.stringify({type:"user", username:"ismail", template:vm.template}); 
              $http(
              {
               method: 'POST',
               url: 'app/stringList',  /* URL to post*/
               data: request  /*You data object/class to post*/
              }).then(function successCallback(response) {
               // this callback will be called asynchronously when the response is available
                vm.result = response.data;
                vm.download();

              }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
              });
              break;
              case 5://All leters
              vm.template = "([a-zA-Z]{"+vm.strlen+"}\n){"+vm.numOfRes+"}";
              var request = JSON.stringify({type:"user", username:"ismail", template:vm.template}); 
              $http(
              {
               method: 'POST',
               url: 'app/stringList',  /* URL to post*/
               data: request  /*You data object/class to post*/
              }).then(function successCallback(response) {
               // this callback will be called asynchronously when the response is available
                vm.result = response.data;
                vm.download();

              }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
              });
              break;
              case 6://digits 
              vm.template = "([0-9]{"+vm.strlen+"}\n){"+vm.numOfRes+"}";
              var request = JSON.stringify({type:"user", username:"ismail", template:vm.template}); 
              $http(
              {
               method: 'POST',
               url: 'app/stringList',  /* URL to post*/
               data: request  /*You data object/class to post*/
              }).then(function successCallback(response) {
               // this callback will be called asynchronously when the response is available
                vm.result = response.data;
                vm.download();

              }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
              });
              break;
              case 7://Digits
              vm.template = vm.template;
              var request = JSON.stringify({type:"user", username:"ismail", template:vm.template}); 
              $http(
              {
               method: 'POST',
               url: 'app/stringList',  /* URL to post*/
               data: request  /*You data object/class to post*/
              }).then(function successCallback(response) {
               // this callback will be called asynchronously when the response is available
                vm.result = response.data;
                vm.download();

              }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
              });
              break;
              default: //Lower Case
            
              }
            }else vm.showWarning = true;


 }; 
          }
        
        ]
      });
