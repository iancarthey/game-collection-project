let gameApp = angular.module('GameApp', ['ngRoute']);

//set up routes
gameApp.config(function($routeProvider){
    console.log('config is loaded');
    //ESTABLISH ROUTES

    $routeProvider
    .when('/game', {
        templateUrl: '/views/game.html',
        controller: 'GameController as vm'
    }).when('/genre', {
        templateUrl: '/views/genre.html',
        controller: 'GenreController as vm'
    }).otherwise(
        {redirectTo: '/game'}
    )
});