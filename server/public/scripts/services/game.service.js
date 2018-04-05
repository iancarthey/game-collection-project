gameApp.service('GameService', ['$http', function($http){
    let self = this;

    //create an array to push games into
    self.game = { list : [] };

    self.getGame = function(){
        console.log('IN getGame');
        $http.get('/game').then(function(response){
            console.log('SUCCESSFULLY GOT GAMES: ', response.data);
            self.game.list = response.data;
        }).catch(function(error){
            console.log('ERROR IN GETTING GAMES');
        })
    };

    
}]);