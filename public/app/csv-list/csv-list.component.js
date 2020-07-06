    'use strict';
    /* */
    /* */
    // Register `testList` component, along with its associated controller and template
    angular.
      module('csvList').
      component('csvList', {
        templateUrl: 'app/csv-list/csv-list.template.html',
        controller: ['$http', '$scope','$window',
          function TestListController($http,$scope,$window) {
             
              var vm = this;
              vm.cols=10;
              vm.rows=5;
              vm.delimiter = ';';
              vm.strlen = 3; 
              vm.alphabet = "a-z";
              vm.randomize = function randomize(){ //(([1-9]{1,5};"){10}\n){10}
              vm.template = "((["+vm.alphabet+"]{"+vm.strlen+"}"+vm.delimiter+"){"+vm.cols+"}\n){"+vm.rows+"}";
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
                blob = new Blob([vm.result], { type: 'text/csv' }),
                url = $window.URL || $window.webkitURL;
                vm.fileUrl = url.createObjectURL(blob);
              }
             
          }
        ]
      });
