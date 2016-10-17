const request = require("request");
const config = require("./config").bandsintown;
const apihost = config.apihost;

const bandsInTown = {
	getNextEvent : function(artistName, callback, errorCallback) {
		request(`${apihost}artists/${artistName}/events/search.json?api_version=2.0&app_id=YOUR_APP_ID&location=use_geoip`,
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
			
			return callback(artistName, nextEvent);
		});	
	}
};


module.exports=bandsInTown;