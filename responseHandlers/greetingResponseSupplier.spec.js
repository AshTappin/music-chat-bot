var responseSupplier = require('./greetingResponseSuppier');

describe("ResponseSupplier",function() {
	it('Responds to \'hello\'', function() {
		expect(responseSupplier.getResponse("hello", "Ash")).toEqual("Hello Ash, my name is Samuel and I am a robot that has been developed "
			+ "to shoot the shit about music with non-bots like you. "
			+ "If you don't mind me asking, what is your lastfm username? I would like to stalk your lastfm "
			+ "for a moment before actually talking to you");
	})
});