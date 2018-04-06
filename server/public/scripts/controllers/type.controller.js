gameApp.controller('TypeController', ['GameService', function(GameService) {
    let self = this;

    let gameService = GameService;

    //link for getTYpe
    self.getType = gameService.getType;

    //LINK FOR TYPE ARRAY
    self.typeArray = gameService.typeArray;

    // LINK FOR ADD TYPE
    self.addType = gameService.addType;
    self.newGameType = gameService.newGameType;

    //LINK FOR DELETING TYPE
    self.removeGameType = function (gt) {
        console.log(gt);
        if(gt.count > 0){
            alert('You cannot delete a game type that has games!');
        } else {
            gameService.removeGameType(gt.id);
        };
    };

}]);