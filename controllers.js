
var myController = angular.module('myContollers',[]);

myControllers.controller('SearchController',function MyController($scope,$http){
  $http.get('js/data.json').then(function(response){
    //get the data 
    $scope.artists = response.data;
    $scope.artistOrder = 'name';
  });
});

myControllers.controller('DetailsController',function MyController($scope,$http,$routeParams){
    $http.get('js/data.json').then(function(response){
      //get the data 
      $scope.artists = response.data;
      $scope.whichItem = $routeParams.itemId;

      if($routeParams.itemId > 0){
          $scope.prevItem = Number($routeParams.itemId) -1;
      } else {
          $scope.prevItem = $scope.artistOrder.length-1;

      }
      if($routeParams.itemId < $scope.artistOrder.length-1) {
          $scope.nextItem = Number($routerParams.itemId) + 1;

      } else {
          $scope.nextItem =  0;
      }
    });
  });