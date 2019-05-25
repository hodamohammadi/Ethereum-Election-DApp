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

	it("allow a user to cast a vote", function() {
		return Election.deployed().then(function(instance) {
			electionInstance =  instance;
			candidateId = 1;
			return electionInstance.vote(1, { from: accounts[0] });
		}).then(function(receipt){
            return electionInstance.voters(accounts[0]);
		}).then(function(voted) {
			assert(voted, "the voter is marked as voted");
		})
	});

});

