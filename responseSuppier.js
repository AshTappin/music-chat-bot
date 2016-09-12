var ResponseSupplier = {
	getResponse : function(payloadMessage, recipient) {

			var knownHellos = [
		  		'hello',
		  		'hi',
		  		'hey',
		  		'bonsoir',
		  		'good evening'
		  	];
	  	if (knownHellos.indexOf(payloadMessage.toLowerCase())>=0) {
			return `Hello ${recipient}, what is your lastfm username?`;
	  	} 
 
	}
};

module.exports=ResponseSupplier