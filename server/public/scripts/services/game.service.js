gameApp.service('GameService', ['$http', function($http){
    let self = this;

    //create an array to push games into
    self.gameLib = { list : [] };

    //create an array to push types into
    self.typeArray = { list: [] };

    self.getGame = function(){
        console.log('IN getGame');
        $http.get('/library/game').then(function(response){
            console.log('SUCCESSFULLY GOT GAMES: ', response.data);
            self.gameLib.list = response.data;
        }).catch(function(error){
            console.log('ERROR IN GETTING GAMES');
        })
    };

    //GET REQUEST FOR TYPE
    self.getType = function(){
        console.log('IN getType');
        $http.get('/library/gametype').then(function(response){
            console.log('SUCCESSFULLY GOT TYPES: ', response.data);
            self.typeArray.list = response.data;
        }).catch(function(error){
            console.log('ERROR IN GETTING TYPES');
        })
    };

    //POST REQUEST FOR ADDING GAME
    self.addGame = function(gameToAdd){
        $http.post('/library/game', gameToAdd).then(function(response){
            self.getGame();
            self.getType();
        }).catch(function(error){
            console.log('ERROR IN CLIENT ADD GAME: ', error);
        })
    };

    //POST REQUEST FOR ADDING TYPE
    self.addType = function(newGameType){
        $http.post('/library/gametype', newGameType).then(function(response){
            self.getType();
        }).catch(function(error){
            console.log('ERROR IN CLIENT ADD GAME TYPE: ', error);
        })
};

    self.getType();    
    self.getGame();

    //DELETE REQUEST FOR GAMETYPE
    self.removeGameType = function(gtId){
        $http.delete(`/library/gametype/${gtId}`).then(function(response){
            console.log('succesfully deleted gametype');
            self.getType();
            self.getGame();
        }).catch(function(error){
            console.log('ERROR DELETING CLIENT GT: ', error);
        });
    };

    // DELETE REQUEST FOR GAMES
    self.removeGame = function(gameId){
        console.log(gameId);
        $http.delete(`/library/game/${gameId}`).then(function(response){
            console.log('successfully deleted gametype');
            self.getGame();
            self.getType();
        }).catch(function(error){
            console.log('ERROR DELETING CLIENT GAME: ', error);
        });
    };

}]);