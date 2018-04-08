let gameApp = angular.module('GameApp', ['ngRoute', 'ngMaterial']);

//set up routes
gameApp.config(function($routeProvider){
    //ESTABLISH ROUTES

    $routeProvider
    .when('/game', {
        templateUrl: '/views/game.html',
        controller: 'GameController as vm'
    }).when('/gametype', {
        templateUrl: '/views/gametype.html',
        controller: 'TypeController as vm'
    }).when('/fav', {
        templateUrl: '/views/fav.html',
        controller: 'GameController as vm'
    })
    .otherwise(
        {redirectTo: '/game'}
    )
});

gameApp.config(function ($mdThemingProvider){
    $mdThemingProvider.theme('default')
    .dark();
})