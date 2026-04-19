const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const contract = await SimpleStorage.deploy();
  await contract.waitForDeployment();

  console.log("Contract deployed to:", await contract.getAddress());

  // Quick interaction test
  await contract.setValue(99);
  const val = await contract.getValue();
  console.log("Stored value:", val.toString());
}

main().catch(console.error);