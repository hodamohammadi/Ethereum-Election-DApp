var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
	it("initializes with two candidates", function() {
		return Election.deployed().then(function(instance) {
			return instance.candidatesCount();
		}).then(function(count) {
			assert.equal(count, 2);
		});
	});

	it("has correct id for candidate 1", function() {
		return Election.deployed().then(function(instance) {
			return instance.candidates(1);
		}).then(function(candidate) {
			return candidate[0];
		}).then(function(id) {
			assert.equal(id, 1);
		});
	});

});

