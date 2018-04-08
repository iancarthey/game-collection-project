gameApp.controller('GameController', ['GameService', '$mdDialog', function(GameService, $mdDialog) {
    let self = this;

    let twitch = GameService;

    //LINK FOR GET GAME FUNCTION
    self.getGame = twitch.getGame;
    
    //link for game Array
    self.gameLib = twitch.gameLib;

    //link for type array
    self.typeArray = twitch.typeArray;

    //link for POST req
    self.addGame = twitch.addGame;
    self.gameToAdd = twitch.gameToAdd;

    //link for DELETE REQ
    self.removeGame = function(ev, game) {
        var confirm = $mdDialog.confirm()
        .title('Are you sure you want to remove this game?')
        .textContent('Choose Wisely...')
        .ariaLabel('Remove Game')
        .targetEvent(ev)
        .ok(`Yes`)
        .cancel('Cancel');

         // DISPLAY THE DIALOG
    $mdDialog.show(confirm).then(function() {
        twitch.removeGame(game.id);
        }, function() {
            console.log('You kept the game')
        });
    };

    //LINK FOR PUT RATING REQ
    self.changeGameScore = twitch.changeGameScore;

    //LINK FOR FAVORITE
    self.favoriteGame = twitch.favoriteGame;
}]);