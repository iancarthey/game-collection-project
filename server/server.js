// source in requirements
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 5000;
const gameRouter = require('./routes/game.router.js');

// APP.USE
app.use(express.static('server/public'));
app.use(bodyParser.json());

// USE ROUTER
app.use('/library', gameRouter);


app.listen(PORT, () =>{
    console.log('Server is running on: ', PORT);
});

