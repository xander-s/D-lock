//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

import "hardhat/console.sol";
contract wallet{
    struct units{
        uint id;
        uint balance;
        address payable recipient;
    }
    mapping(address=>uint)public balances;
    mapping(uint=>units)public customer;
    function updateBalance(uint balance)public payable{
        balances[msg.sender]=balance;
    }
    function send(uint id,address payable receiver,uint amount)public payable{
        units memory _customer=customer[id];
        require(amount>0);
        balances[msg.sender]-=amount;
        _customer.balance+=amount;
        _customer.recipient=receiver;
    }
    function showBalance()public view{
        console.log(balances[msg.sender]);
    }
}