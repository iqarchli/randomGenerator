    'use strict';
    /* */
    /* */
    // Register `numberList` component, along with its associated controller and template
    angular.
      module('numberList').
      component('numberList', {
        templateUrl: 'app/number-list/number-list.template.html',
        controller: ['$http', '$scope','$window',
          function numberListController($http,$scope,$window) {
              var vm = this; 
               vm.delimiter="\\n";
               vm.randomize = function randomize(){ //(([1-9]{1,5};"){10}\n){10}  ((\d{1,2}\n)){10}
              // vm.template="(("+\d{"+1,10}'\n'){"+vm.loop+"}";
               vm.template = "(([1-9]{"+vm.min+","+vm.max+"}"+vm.delimiter+")){"+vm.strlen+"}";
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
               }
 
               vm.download = function download(){
                 var data = vm.result,
                 blob = new Blob([vm.result], { type: 'text/plain' }),
                 url = $window.URL || $window.webkitURL;
                 vm.fileUrl = url.createObjectURL(blob);
               }
          }
        ]
      });
