// blockchain/deployment.js
const hre = require("hardhat");

async function main() {
  const VeritasVote = await hre.ethers.getContractFactory("VeritasVote");
  const veritasVote = await VeritasVote.deploy();

  await veritasVote.deployed();

  console.log("VeritasVote deployed to:", veritasVote.address);

  // Add initial candidates
  await veritasVote.addCandidate("Candidate A");
  await veritasVote.addCandidate("Candidate B");
  await veritasVote.addCandidate("Candidate C");

  console.log("Candidates added.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });