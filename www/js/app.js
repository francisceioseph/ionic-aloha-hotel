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
  });

  $urlRouterProvider.otherwise('/home');
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
