const SquareVerifier = artifacts.require('SquareVerifier');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

// Test if a new solution can be added for contract - SolnSquareVerifier

contract('TestSolnSquareVerifier.js', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];

    beforeEach(async function () {
        this.contract = await SolnSquareVerifier.new(SquareVerifier.address, {from: account_one});
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('Test if an ERC721 token can be minted for contract', async function() {
        const {
            proof,
            inputs
        } = require('../../zokrates/code/square/proof.json'); 

        await this.contract.mintNFT(1, 
            proof.a,
            proof.b,
            proof.c,
            inputs)

        const totalSupply = await this.contract.totalSupply();
        assert.equal(totalSupply, 1, `Supply should be 1, got ${totalSupply}`)
    });

});