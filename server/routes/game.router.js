let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

// GET REQUEST FOR GETTING GAMES
router.get('/game', (req, res) => {
    // TEXT FOR JOING GAMES AND GAMETYPES
    let queryText = `SELECT "games"."id", "games"."name", "games"."release", "gametypes"."type_name" 
    FROM "games" JOIN "gametypes" ON "games"."gametype_id" = 
    "gametypes"."id"`;
    pool.query(queryText)
    .then( (result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR IN SERVER GET: ', error);
        res.sendStatus(500);
    });
});
//GET FOR types
router.get('/gametype', (req, res) => {

    // USE RIGHT JOIN FOR DISPLAYING GAME TYPES THAT HAVE NO GAMES IN THEM
    let queryText = `SELECT "gametypes"."id", "gametypes"."type_name", COUNT("games"."gametype_id") 
                    FROM "games" RIGHT JOIN "gametypes" ON "games"."gametype_id" = 
                    "gametypes"."id" GROUP BY "gametypes"."type_name", "gametypes"."id"`;
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
    let queryText = 'INSERT INTO "games"("name", "gametype_id", "release") VALUES ($1, $2, $3);';
    pool.query(queryText, [newGame.name, newGame.gametype_id, newGame.release])
    .then((result) => {
        res.sendStatus(201);
    }).catch ((error) =>{
        console.log('error in GAME POST SERVER: ', error);
        res.sendStatus(500);
    });
});

//POST FOR ADDING GAMETYPE
router.post('/gametype', (req, res) => {
    let newType = req.body;
    let queryText = 'INSERT INTO "gametypes" ("type_name") VALUES ($1);';
    pool.query(queryText, [newType.type_name])
    .then((result) => {
        res.sendStatus(201);
    }).catch ((error) => {
        console.log('error in GAMETYPE POST SERVER: ', error);
        res.sendStatus(500);
    });
});

//DELETE REQ FOR GT
router.delete('/gametype/:id', (req, res) => {
    let gtId = req.params.id;
    let queryText = 'DELETE FROM gametypes WHERE "id" = $1;';
    pool.query(queryText, [gtId]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR IN SERVER GT DELETE: ', error);
        res.sendStatus(500);
    });
});

// DELETE REQ FOR GAME
router.delete('/game/:id', (req, res) => {
    let gameId = req.params.id;
    let queryText = 'DELETE FROM games WHERE "id" = $1;';
    pool.query(queryText, [gameId]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR IN SERVER GAME DELETE: ', error);
        res.sendStatus(500);
    })
})

module.exports = router;