angular.module('myApp', ['myApp.controllers', /*'myApp.services',*/ /*'myApp.directives',*/ 'ngRoute', /*'ngResource'*/ /*, 'ui.bootstrap', 'ngAnimate', 'ngTouch'*/])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true); //rids of hash-bang routing
    $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: 'PagesCtrl'
        })
        .otherwise('/404', {
            redirectTo: 'views/404.html',
            controller: 'PagesCtrl'
        });
}]);
