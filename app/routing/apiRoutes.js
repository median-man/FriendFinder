// ===========================================================================
// LOAD DATA
// Links api routes to data
// ===========================================================================

let friends = require("../data/friends.json");

// ===========================================================================
// ROUTING
// ===========================================================================

module.exports = function(app) {

    // return json of all friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // TODO process post request (handle incoming survey results)
        console.log(req);

        friends.push(req.body);

        // TODO add friend to data
        res.json(req.body);
    });
};
