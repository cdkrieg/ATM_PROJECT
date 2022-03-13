"use strict"

var accounts = [{"identity": 123456,"balance": 150, "PIN": 2029}, {"identity": 234567,"balance": 347, "PIN": 8885}];

function getAccountBalance(index){
    let returnBalance = accounts[index].balance;
    return returnBalance;
}

function getAccountPIN(index){
    let returnPIN = accounts[index].PIN;
    return returnPIN;
}

module.exports.accounts = accounts;
module.exports.getAccountBalance = getAccountBalance;
module.exports.getAccountPIN = getAccountPIN;

