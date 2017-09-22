// ==============================================================================
// DEPENDENCIES
// ==============================================================================
const Express = require("express");
const BodyParser = require("body-parser");

// ==============================================================================
// EXPRESS SERVER CONFIGURATION
// ==============================================================================
let app = Express();
let PORT = process.env.PORT || 8080;

// implement BodyParser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.text());
app.use(BodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTES
// ================================================================================
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTEN
// =============================================================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
