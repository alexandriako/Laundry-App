angular
  .module('laundryApp', ['ngResource', 'ui.router', 'satellizer', 'ngMessages', 'mhDragdropImage', 'ngAnimate'])
  .constant('API_URL', 'http://localhost:3000/api');
