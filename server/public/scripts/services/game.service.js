gameApp.service('GameService', ['$http', '$mdToast', function($http, $mdToast){
    let self = this;

    //create an array to push games into
    self.gameLib = { list : [] };

    //create an array to push types into
    self.typeArray = { list: [] };
    


    self.getGame = function(){
        $http.get('/library/game').then( (response) => {
            self.gameLib.list = response.data;
        }).catch( (error) => {
            console.log('ERROR IN GETTING GAMES');
        })
    };

    //GET REQUEST FOR TYPE
    self.getType = function(){
        $http.get('/type/gametype').then( (response) => {
            self.typeArray.list = response.data;
        }).catch( (error) => {
            console.log('ERROR IN GETTING TYPES');
        })
    };

    //POST REQUEST FOR ADDING GAME
    self.addGame = function(gameToAdd){
        $http.post('/library/game', gameToAdd).then( (response) => {
            self.getGame();
            self.getType();
        }).catch( (error) => {
            console.log('ERROR IN CLIENT ADD GAME: ', error);
        })
    };

    //POST REQUEST FOR ADDING TYPE
    self.addType = function(newGameType){
        $http.post('/type/gametype', newGameType).then( (response) => {
            self.getType();
        }).catch( (error) => {
            console.log('ERROR IN CLIENT ADD GAME TYPE: ', error);
        })
};

    self.getType();    
    self.getGame();

    //DELETE REQUEST FOR GAMETYPE
    self.removeGameType = function(gtId){
        $http.delete(`/type/gametype/${gtId}`).then( (response) =>{
            self.getType();
            self.getGame();
        }).catch( (error) => {
            console.log('ERROR DELETING CLIENT GT: ', error);
        });
    };

    // DELETE REQUEST FOR GAMES
    self.removeGame = function(gameId){
        $http.delete(`/library/game/${gameId}`).then( (response) => {
            self.getGame();
            self.getType();
            showToast();
        }).catch((error) => {
            console.log('ERROR DELETING CLIENT GAME: ', error);
        });
    };


    function showToast(){
        $mdToast.show(
            $mdToast.simple()
              .textContent('Game Removed!')
              .hideDelay(5000)
          );
    };

    // PUT REQUEST FOR UPDATING RATING
    self.changeGameScore = function(game, ratingChange){
        let rating = {ratingChange: ratingChange};
        $http.put(`/library/game/${game.id}`, rating).then( (response) => {
            self.getGame();
        }).catch( (error) => {
            console.log('ERROR IN CLIENT SCORING PUT REQ: ', error);
        });
    };

    // PUT REQUEST FOR UPDATING FAVORITE
    self.favoriteGame = function(game, gameFav){
        gameFav = !gameFav;
        let newFav = { favChanger: gameFav };
        $http.put(`/fav/game/${game.id}`, newFav).then( (response) => {
            self.getGame();
        }).catch( (error) => {
            console.log('ERROR IN CLIENT FAV PUT REQ: ', error);
        })
    }


}]);