const routes = require('./routes/routes');
const port = 3010;
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors());

routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});