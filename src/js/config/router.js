angular
  .module('laundryApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('static', {
      url: '/',
      templateUrl: 'js/views/auth/login.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'js/views/static/home.html',
      controller: 'HomeCtrl as homectrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'js/views/static/about.html'
    })
    .state('cleanersIndex', {
      url: '/users',
      templateUrl: 'js/views/cleaners/index.html',
      controller: 'CleanersIndexCtrl as cleanersIndex'
    })
    .state('cleanersShow', {
      url: '/profile',
      templateUrl: 'js/views/cleaners/profile.html',
      controller: 'CleanersShowCtrl as cleanersShow'
    })
    .state('cleanersEdit', {
      url: '/profile',
      templateUrl: 'js/views/users/profile.html',
      controller: 'CleanersEditCtrl as cleanersEdit'
    })
    .state('usersShow', {
      url: '/profile',
      templateUrl: 'js/views/users/profile.html',
      controller: 'UsersShowCtrl as usersShow'
    })
    .state('usersEdit', {
      url: '/edit',
      templateUrl: 'js/views/users/edit.html',
      controller: 'UsersEditCtrl as usersEdit'
    });

  $urlRouterProvider.otherwise('/');
}
