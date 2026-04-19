// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 private storedValue;
    address public owner;

    event ValueChanged(uint256 newValue, address changedBy);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setValue(uint256 _value) public onlyOwner {
        storedValue = _value;
        emit ValueChanged(_value, msg.sender);
    }

    function getValue() public view returns (uint256) {
        return storedValue;
    }
}