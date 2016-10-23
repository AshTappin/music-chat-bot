var GreetingResponseSupplier = {

	process : function(incomingGreeting, successCallback, errorCallback) {
		const greeting = incomingGreeting.toLowerCase();

		return greetingIsUnderstood(greeting) 
		? successCallback()
		: errorCallback();

		function greetingIsUnderstood(greeting) {
			const knownHellos = [
		  		'hello',
		  		'hi',
		  		'hey',
		  		'bonsoir',
		  		'good evening',
		  		'guten tag'
		  	];
		  	return !knownHellos.every((word) => { return !greeting.startsWith(word)})
		}

	}
};

module.exports=GreetingResponseSupplier