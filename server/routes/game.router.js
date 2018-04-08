let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

// GET REQUEST FOR GETTING GAMES
router.get('/game', (req, res) => {
    // TEXT FOR JOING GAMES AND GAMETYPES
    let queryText = `SELECT "games"."id", "games"."name", "games"."release", "gametypes"."type_name", "games"."rating", "games"."pic", 
                    "games"."fav" FROM "games" JOIN "gametypes" ON "games"."gametype_id" = 
                    "gametypes"."id"`;
    pool.query(queryText)
    .then( (result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR IN SERVER GET: ', error);
        res.sendStatus(500);
    });
});

//POST FOR ADDING GAME
router.post('/game', (req, res) => {
    let newGame = req.body;
    let queryText = 'INSERT INTO "games"("name", "gametype_id", "release", "rating") VALUES ($1, $2, $3, $4);';
    pool.query(queryText, [newGame.name, newGame.gametype_id, newGame.release, newGame.rating])
    .then((result) => {
        res.sendStatus(201);
    }).catch ((error) =>{
        console.log('error in GAME POST SERVER: ', error);
        res.sendStatus(500);
    });
});


// DELETE REQ FOR GAME
router.delete('/game/:id', (req, res) => {
    let gameId = req.params.id;
    let queryText = 'DELETE FROM games WHERE "id" = $1;';
    pool.query(queryText, [gameId])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR IN SERVER GAME DELETE: ', error);
        res.sendStatus(500);
    })
})

// PUT FOR UPDATING GAME SCORE
router.put('/game/:id', (req, res) => {
    let id = req.params.id;
    let score = req.body;
    queryText = 'UPDATE games SET "rating" = rating + $1 WHERE "id" = $2;';
    pool.query(queryText, [score.ratingChange, id])
    .then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR IN SERVER PUT FOR RATING: ', error);
        res.sendStatus(500);
    })
})


module.exports = router;