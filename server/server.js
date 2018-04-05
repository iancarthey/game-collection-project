// source in express
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 5000;

// APP.USE
app.use(express.static('server/public'));
app.use(bodyParser.json());

app.listen(PORT, () =>{
    console.log('Server is running on: ', PORT);
})

