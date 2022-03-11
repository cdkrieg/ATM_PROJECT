"use strict"

const {PIN, balance} = require("./account.js");

function getBalance(){
    return balance;

}

function withdraw(){

}

function deposit(){

}

function validatePin(input){
    if(parseInt(input) === PIN){
        return true;
    } else {
        return false;
    }
}


module.exports.validatePin = validatePin;
module.exports.deposit = deposit;
module.exports.withdraw = withdraw;
module.exports.getBalance = getBalance;
