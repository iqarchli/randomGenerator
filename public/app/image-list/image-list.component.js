    'use strict';
    /* */
    /* */
    // Register `testList` component, along with its associated controller and template
    angular.
      module('imageList').
      component('imageList', {
        templateUrl: 'app/image-list/image-list.template.html',
        controller: ['$http', '$scope',
          function imageListController($http,$scope) {
          var vm = this; 
          vm.title = "";
          
          vm.options = [
              {name:'Full', id:1},
              {name:'Regular', id:2},
              {name:'Small', id:3},
              {name:'Thumnail', id:4}
            ];
            
          vm.randomize = function randomize(){
          $http(
            {
               method: 'GET',
               url: 'https://api.unsplash.com/photos/random/?client_id=3jcXXj-wfS4NqtE9AFSaWTGcQF5VRgq4HKdY9SNYLig'  /*URL to post*/
              // data: request  /*You data object/class to post*/
            }).then(function successCallback(response) {
               // this callback will be called asynchronously when the response is available
                vm.result = response.data;
                vm.title = vm.result.location.title;
              debugger;
                switch(vm.selectedName.id){ 
                case 1: //Full
                vm.imageLink = vm.result.urls.full;
                break;
                case 2: //Regular
                vm.imageLink = vm.result.urls.regular;  
                break; 
                case 3://Small
                vm.imageLink = vm.result.urls.small;
                break;
                default: //Small
                vm.imageLink = vm.result.urls.small;
                }
            }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
                vm.result = "Error: Wrong Template. Please double check the guidelines"
            });
            }
          }
        ]
      });
