// source in requirements
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 5000;
const gameRouter = require('./routes/game.router.js');
const typeRouter = require('./routes/type.router.js');
const favRouter = require('./routes/fav.router');

// APP.USE
app.use(express.static('server/public'));
app.use(bodyParser.json());

// USE GAME ROUTER
app.use('/library', gameRouter);

// USE TYPE ROUTER
app.use('/type', typeRouter);

// USE FAV ROUTER
app.use('/fav', favRouter);



app.listen(PORT, () =>{
    console.log('Server is running on: ', PORT);
});

