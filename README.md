# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

This project will be minting our own tokens to represent your title to the properties. Before minting a token, the properties will need to be verified. zk-SNARKs will be used to create a verification system which can prove you have title to the property without revealing that specific information on the property.

Once the token has been verified, it is placed on a blockchain market place (OpenSea) for others to purchase.

Succinct Zero-Knowledge proofs (zkSnarks) are proving to be one of the most promising frameworks for enhancing privacy and scalability in the blockchain space. In this project, we use an implementation of zkSnarks using ZoKrates, a toolbox for zkSNARKs on Ethereum.

![Zokrates](https://d3i71xaburhd42.cloudfront.net/5b9a39b51df3d724609af6c888189a713aeac000/500px/4-Figure2-1.png)

# Versions

* node v10.24.1
* myEtherWaller v5 - https://v5.myetherwallet.com/interface/interact-with-contract
* zokrates:0.4.6
* truffle 5.4.32

# Commands
```
docker run -v /Users/elok/workspace/Blockchain-Capstone/zokrates/code:/home/zokrates/code -ti zokrates/zokrates:0.4.6 /bin/bash
~/zokrates compile -i square.code
~/zokrates setup --proving-scheme pghr13
~/zokrates setup
~/zokrates compute-witness -a 2 4
~/zokrates generate-proof --proving-scheme pghr13
~/zokrates export-verifier
```

```
truffle compile
truffle migrate --reset --network development
truffle test test/TestERC721Mintable.js
truffle test test/TestSquareVerifier.js
truffle test test/TestSolnSquareVerifier.js

truffle migrate --reset --network rinkeby
```

# Rinkeby Network SolnSquareVerifier Contract Address

```
0x7A3A7763D1DEdB847c2bEe21765Ec7575596CEf5
```
https://rinkeby.etherscan.io/address/0x7A3A7763D1DEdB847c2bEe21765Ec7575596CEf5

# Minting

Minter<br>
https://rinkeby.etherscan.io/address/0x8943B0D37Ab317E82a51Ea6E04200A3783aD9003

Buyer<br>
https://rinkeby.etherscan.io/address/0xeea8Fc8938861988362948d5f28F70440984420A

# OpenSea

OpenSea is a decentralized marketplace that is used for selling for crypto assets such as CryptoKitties and other digital assets that are powered off Ethereum. On OpenSea, you can buy or sell any of these items through a smart contract, meaning that no central authority ever holds custody of your items.

Minter<br>
https://testnets.opensea.io/collection/housingtoken-t2tuteqbhu

Buyer<br>
https://testnets.opensea.io/0x8943B0D37Ab317E82a51Ea6E04200A3783aD9003?tab=collected

# ABI
[SolnSquareVerifier ABI](https://github.com/elok/udacity_blockchain_developer_5/blob/master/abi.txt)

# Project Resources

* https://knowledge.udacity.com/questions/305616
* https://www.youtube.com/watch?v=8MChn-NJJB0&t=108s
* https://knowledge.udacity.com/questions/674373
* https://knowledge.udacity.com/questions/835739
* https://knowledge.udacity.com/questions/133570

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
