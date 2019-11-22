let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let router = require('./routes/movieRoutes.js')

let app = express();

// Middleware
app.use(morgan(':method :url :status - :response-time ms'));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

// Router
app.use('/', router);

let port = 5000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});














/*
Use the routes below to build your application:

|      URL         | HTTP Verb |  Result                                                     |
| :------------:   | :-------: |------------------------------------------------------:      |
|     /genres      |   GET     |  Respond with JSON of all genres                            |
|     /search      |   GET     |  Respond with JSON of all movies by the selected genre      |
|     /save        |   POST    |  Save selected movie as favorite                            |
|     /delete      |   POST    |  Remove selected movie as favorite                          |

*/