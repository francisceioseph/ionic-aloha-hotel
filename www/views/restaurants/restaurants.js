angular.module('App').controller('RestaurantsController', function($scope, $http){
  $scope.page = 0;
  $scope.total = 1;
  $scope.restaurants = [];

  $scope.getRestaurants = function() {
    $scope.page++;
    $http.get('https://ionic-in-action-api.herokuapp.com/restaurants?age=' + $scope.page)
    .success(function(response){
      angular.forEach(response.restaurants, function(restaurant){
        $scope.restaurants.push(restaurant);
      });

      $scope.total = response.totalPages;
      $scope.$broadcast('scrool.inifiniteScrollComplete');
    })
    .error(function(err){
      $scope.$broadcast('scrool.inifiniteScrollComplete');
      console.log(err);
    });
  };

  $scope.getRestaurants();
});
