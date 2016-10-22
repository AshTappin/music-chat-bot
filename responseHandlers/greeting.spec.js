const sinon = require('sinon');
var responseSupplier = require('./greeting');

describe("Greeting",function() {
	it('Calls success callback on \'hello\'', function() {
		var successCallback = sinon.spy();

		responseSupplier.process("hello", successCallback);

		expect(successCallback.calledOnce).toBe(true);
		
	})
});