pragma solidity >=0.4.21 <0.6.0;

import './ERC721Mintable.sol';

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is LokToken {

    // TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
    ISquareVerifier squareVerifier;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => bool) solutionsUsed;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(bytes32 hash);

    // TODO define an array of the above struct
    constructor(address squareVerifierAddress) public {
        squareVerifier = ISquareVerifier(squareVerifierAddress);
    }

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(bytes32 hash) internal {
        solutionsUsed[hash] = true;
        emit SolutionAdded(hash);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintNFT(
        uint256 tokenId,
        uint[2] calldata a,
        uint[2][2] calldata b,
        uint[2] calldata c,
        uint[2] calldata input
    ) external {
        // Confirm solution has not been used
        bytes32 hash = keccak256(abi.encodePacked(a, b, c, input));
        require(solutionsUsed[hash] == false, "Proof has been used");

        // Confirm solution is correct
        bool isVerified = squareVerifier.verifyTx(a, b, c, input);
        require(isVerified, "Proof was incorrect");

        // Mark solution as used
        addSolution(hash);

        // Mint token
        _mint(msg.sender, tokenId);
    }
}

// TODO define a solutions struct that can hold an index & an address
interface ISquareVerifier {
    function verifyTx(
        uint[2] calldata a,
        uint[2][2] calldata b,
        uint[2] calldata c,
        uint[2] calldata input
    )
        external
        returns (bool);
}