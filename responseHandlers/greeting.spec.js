const sinon = require('sinon');
const responseSupplier = require('./greeting');

describe("Greeting",function() {

	var successCallback;

  	beforeEach(function() {
		successCallback = sinon.spy();
	});

	it('Calls success callback on \'hello\'', function() {
		responseSupplier.process("hello", successCallback);
		expect(successCallback.calledOnce).toBe(true);
	});

	it('Calls success callback on \'hi\'', function() {
		responseSupplier.process("hi", successCallback);
		expect(successCallback.calledOnce).toBe(true);
	});

	it('Calls success callback on \'Hello\'', function() {
		responseSupplier.process("Hello", successCallback);
		expect(successCallback.calledOnce).toBe(true);
	});

	it('Calls success callback on \'Hello computer\'', function() {
		responseSupplier.process("Hello computer", successCallback);
		expect(successCallback.calledOnce).toBe(true);
	});


	it('Calls success callback on \'Hello my dear bot\'', function() {
		responseSupplier.process("Hello my dear bot", successCallback);
		expect(successCallback.calledOnce).toBe(true);
	});

	it('Calls success callback on \'Good evening, computer\'', function() {
		responseSupplier.process("Good evening, computer", successCallback);
		expect(successCallback.calledOnce).toBe(true);
	});


	it('Calls error callback on \'Do you like lemon curry\'', function() {
		var errorCallback = sinon.spy();
		responseSupplier.process("Do you like lemon curry?", successCallback, errorCallback);
		expect(errorCallback.calledOnce).toBe(true);
	});


	it('Calls error callback on \'Hell\'', function() {
		var errorCallback = sinon.spy();
		responseSupplier.process("hell", successCallback, errorCallback);
		expect(errorCallback.calledOnce).toBe(true);
	});


	it('Calls error callback on \'Computer, hello\'', function() {
		var errorCallback = sinon.spy();
		responseSupplier.process("hell", successCallback, errorCallback);
		expect(errorCallback.calledOnce).toBe(true);
	});
});