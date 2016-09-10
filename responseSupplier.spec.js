var responseSupplier = require('./responseSuppier');

describe("ResponseSupplier",function() {
	it('Responds to \'hello\'', function() {
		expect(responseSupplier.getResponse("hello", "Ash")).toEqual('Hello Ash, what bands have you been rockin\' to today?');
	})
});