var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = 3000;

var db = require("./models");




// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// serve up files in /public folder
app.use(express.static(path.join(__dirname, '/public')));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});