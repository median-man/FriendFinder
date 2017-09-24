// ===========================================================================
// DEPENDENCIES
// ===========================================================================
const Express = require("express");
const BodyParser = require("body-parser");
const Path = require("path");

// ===========================================================================
// EXPRESS SERVER CONFIGURATION
// ===========================================================================
let app = Express();
let PORT = process.env.PORT || 8080;

// static assets
app.use(Express.static(Path.join(__dirname, "app/public")));
	
// implement BodyParser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.text());
app.use(BodyParser.json({ type: "application/vnd.api+json" }));

// ==============================================================================
// ROUTES
// ===========================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ===========================================================================
// LISTEN
// ===========================================================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
