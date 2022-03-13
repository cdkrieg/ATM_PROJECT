"use strict"

const account = require("./account");
const wallet = require("./wallet");

let count = 3;

function getBalance(index){
    let balance = account.accounts[index].balance;
    return balance;

}

function withdraw(input,index){
    let withdrawResponse;
    let balance = getBalance(index);
    let money = wallet.person[index].money;
    if(input <= balance){
        console.clear();
        withdrawResponse = true;
        balance -= input;
        money += input;
        wallet.person[index].money = money;
        account.accounts[index].balance = balance;
        return withdrawResponse;      
    } else if(input > balance){
        console.clear();
        withdrawResponse = false;
        return withdrawResponse
    }
}

function deposit(input, index){
    let balance = getBalance(index);
    let money = wallet.person[index].money;
    money -= input;
    money = wallet.person[index].money = money;
    if(input <= 500){
        balance += input;
        account.accounts[index].balance = balance;
        return true;
    } else {
        balance += 500;
        account.accounts[index].balance = balance;
        return false;
    }

}

function validatePin(input,index){
    if(parseInt(input) === account.accounts[index].PIN){
        return true;
    } else if(count === 0){
        console.clear();
        console.log("You have exceeded the maximum number of attempts! \nThank you for using the Senior Chief Banking System.\n");
        return setTimeout(function(){process.exit()}, 3000);
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
