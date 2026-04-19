// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 private storedValue;
    address public owner;

    event ValueChanged(uint256 newValue, address changedBy);

    constructor() {
        owner = msg.sender;
    }

    function setValue(uint256 _value) public {
        storedValue = _value;
        emit ValueChanged(_value, msg.sender);
    }

    function getValue() public view returns (uint256) {
        return storedValue;
    }
}