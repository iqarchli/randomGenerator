'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
      when('/test', {
          template: '<test-list></test-list>'
        }).
       when('/json', {
          template: '<json-list></json-list>'
        }).
      when('/csv', {
          template: '<csv-list></csv-list>'
        }).
       when('/number', {
          template: '<number-list></number-list>'
        }).
       when('/string/', {
          template: '<string-list></string-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/test');
    }
  ]);
