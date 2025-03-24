// blockchain/contract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VeritasVote {
    address public owner;
    mapping(uint256 => string) public candidates;
    mapping(address => uint256) public votes;
    uint256 public candidateCount;

    event Voted(address indexed voter, uint256 indexed candidateId);

    constructor() {
        owner = msg.sender;
        candidateCount = 0;
    }

    function addCandidate(string memory _name) public onlyOwner {
        candidateCount++;
        candidates[candidateCount] = _name;
    }

    function vote(uint256 _candidateId) public {
        require(votes[msg.sender] == 0, "You have already voted.");
        require(_candidateId > 0 && _candidateId <= candidateCount, "Invalid candidate ID.");
        votes[msg.sender] = _candidateId;
        emit Voted(msg.sender, _candidateId);
    }

    function getVote(address _voter) public view returns (uint256) {
        return votes[_voter];
    }

    function getCandidate(uint256 _candidateId) public view returns (string memory) {
        return candidates[_candidateId];
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }
}