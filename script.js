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
var badenizerApp = angular.module("badenizerApp",[ngResource]);

// badenizerApp.controller("Customerobj", Customer);
