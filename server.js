var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

// ================================================================================
//https://www.npmjs.com/package/body-parser
// ================================================================================
// create application/json parser
var jsonParser = bodyParser.json();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))


// ================================================================================
// ROUTER - points to route files
// ================================================================================

// require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// =============================================================================
// LISTENER - start the server
// =============================================================================

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})