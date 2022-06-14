// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

// module.exports = function (deployer) {
//   deployer.deploy(Verifier);
//   deployer.deploy(SolnSquareVerifier);
// };

module.exports = function (deployer) {
  deployer.deploy(SquareVerifier)
    .then(() => {
      return deployer.deploy(SolnSquareVerifier, SquareVerifier.address)
    });
}

// migrating the appropriate contracts
// const LokToken = artifacts.require("LokToken");
// const SquareVerifier = artifacts.require("SquareVerifier");
// const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

// module.exports = function(deployer, network) {
//   if (!(['mainnet', 'rinkeby'].includes(network))) {
//     deployer.deploy(LokToken);
//   }
//   deployer.deploy(SquareVerifier)
//     .then(() => deployer.deploy(SolnSquareVerifier, SquareVerifier.address));
// };
