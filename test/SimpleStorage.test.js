const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  let simpleStorage;

  beforeEach(async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorage.deploy();
  });

  it("Should store and retrieve a value", async function () {
    await simpleStorage.setValue(42);
    expect(await simpleStorage.getValue()).to.equal(42);
  });

  it("Should set the deployer as owner", async function () {
    const [owner] = await ethers.getSigners();
    expect(await simpleStorage.owner()).to.equal(owner.address);
  });

  it("Should emit ValueChanged event", async function () {
    await expect(simpleStorage.setValue(100))
      .to.emit(simpleStorage, "ValueChanged");
  });
});