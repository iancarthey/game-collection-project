gameApp.controller('GameController', ['GameService', function(GameService) {
    let self = this;

    let twitch = GameService;

    //LINK FOR GET GAME FUNCTION
    self.getGame = twitch.getGame;
    
    //link for game Array
    self.gameLib = twitch.gameLib;

}]);