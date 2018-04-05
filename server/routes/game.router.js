let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

// GET REQUEST
router.get('/game', (req, res) => {
    let queryText = 'SELECT * FROM games';
    pool.query(queryText)
    .then( (result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR IN SERVER GET: ', error);
        res.sendStatus(500);
    });
});

module.exports = router;