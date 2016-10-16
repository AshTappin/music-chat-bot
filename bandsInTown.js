const request = require("request");

const bandsInTown = {
	getNextEvent : function(artistName, callback, errorCallback) {
		request(`http://api.bandsintown.com/artists/${artistName}/events.json?api_version=2.0&app_id=YOUR_APP_ID`,
		 (error, response, body) => {
		 	var nextEvent = {};
		 	try {
				var event = JSON.parse(body);
				
				nextEvent.venueName = event[0].venue.name;
				nextEvent.location = event[0].formatted_location;
				nextEvent.dateTime = event[0].formatted_datetime;

			} catch (e) {
				console.log(`bandsInTown: ${e}`)
				return errorCallback(artistName);
			} 
			console.log(nextEvent)
			return callback(artistName, nextEvent);
		});	
	}
};


module.exports=bandsInTown;