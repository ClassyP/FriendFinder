// load npm required packages
var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var path = require("path");

// Setup Express & Heroku PORT settings
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app, path);
require("./app/routing/htmlRoutes.js")(app, path);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//express body-parser path