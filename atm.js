"use strict"

var {PIN, balance} = require("./account.js");
var {money} = require("./wallet.js");
let count = 3;

function getBalance(){
    return balance;

}

function withdraw(input){
    let withdrawResponse;
    if(input <= balance){
        console.clear();
        withdrawResponse = true;
        balance -= input;
        money += input;
        return withdrawResponse;      
    } else if(input > balance){
        console.clear();
        withdrawResponse = false;
        return withdrawResponse
    }
}

function deposit(input){
    money -= input;
    if(input <= 500){
        balance += input;
        return true;
    } else {
        balance += 500;
        return false;
    }

}

function validatePin(input){
    if(parseInt(input) === PIN){
        return true;
    } else if(count === 0){
        console.clear();
        console.log("You have exceeded the maximum number of attempts! \nThank you for using the Senior Chief Banking System.");
        return process.exit();
    } else {
        count--;
        console.log("\nInvalid PIN\n");
        return false;
    }
}


module.exports.validatePin = validatePin;
module.exports.deposit = deposit;
module.exports.withdraw = withdraw;
module.exports.getBalance = getBalance;
