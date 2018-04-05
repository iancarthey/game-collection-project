gameApp.service('GameService', ['$http', function($http){
    let self = this;

    //create an array to push games into
    self.gameLib = { list : [] };

    self.getGame = function(){
        console.log('IN getGame');
        $http.get('/library/game').then(function(response){
            console.log('SUCCESSFULLY GOT GAMES: ', response.data);
            self.gameLib.list = response.data;
        }).catch(function(error){
            console.log('ERROR IN GETTING GAMES');
        })
    };

    
    self.getGame();
}]);