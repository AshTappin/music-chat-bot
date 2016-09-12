const request = require("request");

const lastfm = {
	getTopArtistThisWeek : function(username, callback) {
		console.log(username)
		request(`http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&period=3month&limit=1&api_key=cfa1cc4b9f3cff34dec8d289cbe2f8f9&format=json`,
		 function(error, response, body){
		 	console.log(body);
			var artistName = JSON.parse(body).topartists.artist[0].name;
			return callback(artistName);
		});
		

	}

};


module.exports=lastfm;




