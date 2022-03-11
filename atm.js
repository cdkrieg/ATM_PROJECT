"use strict"

function getBalance(){

}

function withdraw(){

}

function deposit(){

}

function validatePin(input){
    let pin = 2029;
    if(input == pin){
        return true;
    } else {
        return false;
    }
}


module.exports.validatePin = validatePin;
module.exports.deposit = deposit;
module.exports.withdraw = withdraw;
module.exports.getBalance = getBalance;
