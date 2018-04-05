gameApp.controller('GameController', ['GameService', function(GameService) {
    let self = this;

    let twitch = CatService;

    //LINK FOR GET GAME FUNCTION

    self.getGame = twitch.getGame;

}]);