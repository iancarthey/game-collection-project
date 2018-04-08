let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

// PUT FOR UPDATING FAV VARIABLE
router.put('/game/:id', (req, res) => {
    let id = req.params.id;
    let fav = req.body;
    queryText = 'UPDATE games SET "fav" = $1 WHERE "id" = $2;';
    pool.query(queryText, [fav.favChanger, id])
    .then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR IN SERVER PUT FOR FAV: ', error);
        res.sendStatus(500);
    });
});


module.exports = router;