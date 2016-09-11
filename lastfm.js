const request = require("request");

const lastfm = {
	getTopArtistThisWeek : function(username, callback) {
		request("http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user="+username+"&period=7day&limit=1&api_key=cfa1cc4b9f3cff34dec8d289cbe2f8f9&format=json", function(error, response, body){
			var response = JSON.parse(body).topartists.artist[0].name;
			return callback(response);
		});
		

	}

};

lastfm.getTopArtistThisWeek("Ash1592", function(response) {
	lastfm.response = response;
	console.log(lastfm.response);
});




