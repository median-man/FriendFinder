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

	// Return a json of match from friends and add user to friends
	app.post("/api/friends", function(req, res) {
		// get the friend object returned by the user
		let user = req.body;

        friends.push(req.body);

		// validate the user data
		try {
	
			// TODO test if script tags can be given as imput and subsequently executed when
			// displayed in the browser
			user.name = user.name.toString();
			user.photo = user.photo.toString();
			if ( user.name.length < 1 ) throw "Invalid user name. User name must have at least one character.";
	
			// validate and format the scores array
			if ( user.scores.length !== 10 ) throw "Unexpected count of scores from the survey. There must be exactly 10 scores.";
			user.scores = user.scores.map(function(score) {	
				score = parseInt(score);
				if ( score < 1 || score > 5 ) throw "Invalid score. Score must be between 1 and 5 inclusive.";
				return score;
			});
		}
		catch ( err ) {
	
		// TODO: handle user input error
			return res.send(err.toString());
		}
};
