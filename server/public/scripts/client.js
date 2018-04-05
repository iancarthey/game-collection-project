let gameApp = angular.module('GameApp', ['ngRoute']);

//set up routes
gameApp.config(function($routeProvider){
    //ESTABLISH ROUTES

    $routeProvider
    .when('/game', {
        templateUrl: '/views/game.html',
        controller: 'GameController as vm'
    }).when('/genre', {
        templateUrl: '/views/gametype.html',
        controller: 'TypeController as vm'
    }).otherwise(
        {redirectTo: '/game'}
    )
});