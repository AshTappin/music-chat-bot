
var ResponseSupplier = {
	getResponse : function(payloadMessage, recipient) {
	var knownHellos = [
  		'hello',
  		'hi',
  		'hey',
  		'bonsoir',
  		'good evening'
  	];
  	return knownHellos.indexOf(payloadMessage.toLowerCase()) >= 0 ? 
  	`Hello ${recipient}, what bands have you been rockin' to today?` : 
  	"I do not understand you...yet.\nThrash to some Megadeth! " +
  	"https://www.youtube.com/watch?v=O-OMoZUHgr4" ;
  }
};

module.exports=ResponseSupplier