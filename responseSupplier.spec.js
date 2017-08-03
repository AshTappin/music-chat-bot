var responseSupplier = require('./greetingResponseSuppier');

describe("ResponseSupplier",function() {
	it('Responds to \'hello\'', function() {
		expect(responseSupplier.getResponse("hello", "Ash")).toEqual('Hello Ash, what is your lastfm username?');
	})
});