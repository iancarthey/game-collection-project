gameApp.controller('TypeController', ['GameService', function(GameService) {
    let self = this;

    let gameService = GameService;

    //link for getTYpe
    self.getType = gameService.getType;

    //LINK FOR TYPE ARRAY
    self.typeArray = gameService.typeArray;

}]);