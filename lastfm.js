const request = require("request");
const config = require("./config").lastfm
const apiHost = config.apihost; 
const apiKey = config.apikey;

const lastfm = {
	getTopFiveArtistsThisMonth : function(username, callback, errorCallback) {
		request(`${apiHost}`
			+ `?method=user.gettopartists`
			+ `&user=${username}&period=1month&limit=5`
			+ `&api_key=${apiKey}&format=json`,
		 (error, response, body) => {
		 	try {
		 		var artists = JSON.parse(body).topartists.artist;
				var artistName = JSON.parse(body).topartists.artist[4].name;
			} catch (e) {
				console.log(`getTopArtistThisWeekError: ${e}`);
				return errorCallback(username);
			} 
			return callback(artistName);
		});	
	},
	getTopAlbumForArtist : function(artistName, callback) {
		request(`${apiHost}`
			+ `?method=artist.gettopalbums&artist=${artistName}`
			+ `&api_key=${apiKey}&format=json`,
		 (error, response, body) => {
		 	try {
		 		var album = JSON.parse(body).topalbums.album;
				var albumName = album[0].name;
			} catch (e) {
				console.log(e);
			} 
			return callback(albumName);
		});	
	}
};


module.exports=lastfm;