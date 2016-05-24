angular.module('App', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){

  // Declares a state for home view
  $stateProvider.state('home', {
    url: '/home', //url for anchor links
    templateUrl: 'views/home/home.html' //view that'll be loaded
  })

  .state('reservation', {
    url: '/reservation',
    controller: 'ReservationController',
    templateUrl: 'views/reservation/reservation.html'
  })

  .state('weather', {
    url: '/weather',
    controller: 'WeatherController',
    templateUrl: 'views/weather/weather.html'
  })

  .state('restaurants', {
    url: '/restaurants',
    controller: 'RestaurantsController',
    templateUrl: 'views/restaurants/restaurants.html'
  })

  .state('tour', {
    url: '/tour',
    templateUrl: 'views/tour/tour.html'
  });

  $urlRouterProvider.otherwise('/tour');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
