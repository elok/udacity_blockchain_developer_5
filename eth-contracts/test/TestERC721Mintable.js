var LokToken = artifacts.require('LokToken');

contract('TestLokToken', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await LokToken.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1);
            await this.contract.mint(account_two, 2);
        })

        it('should return total supply', async function () { 
            const totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 2, `Supply should be 2, got ${totalSupply}`)
        })

        it('should get token balance', async function () { 
            const tokenBalance = await this.contract.balanceOf(account_two);
            assert.equal(tokenBalance, 1, `Token balance should be 1, got ${tokenBalance}`);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const tokenURI = await this.contract.tokenURI(1);
            const URI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1";
            assert.equal(tokenURI, URI, `Received unexpected token URI: ${tokenURI}`);
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_one, account_two, 1);
            const tokenBalance = await this.contract.balanceOf(account_two);
            assert.equal(tokenBalance, 2, `Token balance should be 2, got ${tokenBalance}`);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await LokToken.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () {
            let exceptionThrown = false;
            try {
                await this.contract.mint(account_one, 1, {from: account_two});
            }
            catch(e) {
                exceptionThrown = true;
            }
            assert.equal(exceptionThrown, true, "Exception should have been thrown")
        })

        it('should return contract owner', async function () { 
            const owner = await this.contract.getOwner();
            assert.equal(owner, account_one, "Account one should be owner");
        })

    });
})