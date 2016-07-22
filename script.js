// - anything with "$" are instances precreated with Angular
// - ng-app is a controller of all global instances
// - who kick-starts the action? angular.module("",[]);

// function Customer($scope, $rootScope) { //dependency injection -- the framework injects the object instead of you creating it
//   $rootScope.Counter = (($rootScope.Counter || 0) +1);
//   $scope.CustomerName = "Tori";
//   $scope.CustomerCode = "29664";
//   $scope.Submit = function() {
//     $scope.success = "";
//     $scope.error = "";
//
//     if($scope.CustomerName.length==0){
//       $scope.error = "Oops! Customer name required!";
//       $scope.success = "";
//     } if($scope.CustomerCode.length==0){
//       $scope.error = "Oops! Customer code required!";
//     } else {
//       $scope.success = "Yaay..it works!!";
//     }
//   }
// }

// Creates a global module. Can create routes, models, filters and directives.
// ngResource is an additional module that defines functionality for creating resources (models)
var helloangular = angular.module("helloangular",[ngResource]);

$scope.records = [{ title : 'one' }, { title : 'two' }, { title : 'three' }];

// ----- DEPENDANCY INJECTION -----------------------
// the controller definition
var Ctrl = function($scope, $http, $location) {
  //now you can use any of the injected variables

  //to change the URL after something has happened then you can use $location
  $location.path('/path/to/new/page');
}
//and now the injection of the variables
Ctrl.$inject = ['$scope','$http','$location'];

// badenizerApp.controller("Customerobj", Customer);
