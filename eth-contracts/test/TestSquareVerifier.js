// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
const SquareVerifier = artifacts.require('SquareVerifier');

contract('TestSquareVerifier', accounts => {

    beforeEach(async function () {
        this.contract = await SquareVerifier.new({from: accounts[0]});
    });

    it('Test verification with correct proof', async function () {
        // Test verification with correct proof
        // - use the contents from proof.json generated from zokrates steps
        const {
            proof,
            inputs
        } = require('../../zokrates/code/square/proof.json');        

        // Call the contract
        const verificationResults = await this.contract.verifyTx.call(
            proof.a,
            proof.b,
            proof.c,
            inputs
        );

        // Check the results
        assert.equal(verificationResults, true, "Verification Unsuccessful");
    });
});
    
// Test verification with incorrect proof
