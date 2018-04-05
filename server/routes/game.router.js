let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

// GET REQUEST
router.get('/game', (req, res) => {
    let queryText = `SELECT "games"."name", "games"."release", "gametypes"."type_name" 
    FROM "games" JOIN "gametypes" ON "games"."gametype_id" = 
    "gametypes"."id"`;
    pool.query(queryText)
    .then( (result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR IN SERVER GET: ', error);
        res.sendStatus(500);
    });
});
//GET FOR types
router.get('/gametype', (req, res) => {
    let queryText = `SELECT "gametypes"."id", "gametypes"."type_name", COUNT("games"."gametype_id") 
                    FROM "games" JOIN "gametypes" ON "games"."gametype_id" = 
                    "gametypes"."id" GROUP BY "gametypes"."type_name", "gametypes"."id"`;
    pool.query(queryText)
    .then( (result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR IN SERVER GET: ', error);
        res.sendStatus(500);
    });
});

//POST FOR ADDING GAME
router.post('/', (req, res) => {
    console.log(req.body);
    let newGame = req.body;
    let queryText = 'INSERT INTO "games"("name", "gametype_id", "release") VALUES ($1, $2, $3);';
    pool.query(queryText, [newGame.name, newGame.gametype_id, newGame.release])
    .then((result) => {
        res.sendStatus(201);
    }).catch ((error) =>{
        console.log('error in POST SERVER: ', error);
        res.sendStatus(500);
    });
});

module.exports = router;