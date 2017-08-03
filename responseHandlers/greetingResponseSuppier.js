var GreetingResponseSupplier = {
	getResponse : function(payloadMessage, recipient) {

			var knownHellos = [
		  		'hello',
		  		'hi',
		  		'hey',
		  		'bonsoir',
		  		'good evening'
		  	];
	  	if (knownHellos.indexOf(payloadMessage.toLowerCase())>=0) {
			return `Hello ${recipient}, my name is Samuel and I am a robot that has been developed `
			+ `to shoot the shit about music with non-bots like you. `
			+ `If you don't mind me asking, what is your lastfm username? I would like to stalk your lastfm `
			+ `for a moment before actually talking to you`;
	  	} 
 
	}
};

module.exports=GreetingResponseSupplier