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
            vm.strlen =10;
            vm.numOfRes =10;
            vm.disChar = true;
           
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
             debugger;
            if(vm.selectedName.id == 7)
                vm.disChar = false;
            else
                vm.disChar = true;
           };
           vm.randomize = function randomize() {
            
             if (vm.strlen == undefined)
             vm.strlen=10;debugger;
             if(vm.selectedName === undefined){
              vm.selectedName = 
              {name:'Lower Case', id:1}
            ;
           }
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

              }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
              });
              break;
              default: //Lower Case
            
              }


 }; 
          }
        
        ]
      });
