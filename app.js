var myApp = angular.module('myApp',[
  'ngRoute',
  'myControllers'
]);

myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl : 'js/partiarls/search.html',
    controller: 'SearchController'
  })
  .when('/details/:itemId', {
    templateUrl : 'js/partiarls/details.html',
    controller: 'DetailsController'
  });
}]);





