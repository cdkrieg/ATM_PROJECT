"use strict"
const prompt = require('prompt-sync')();
const {validatePin, withdraw, getBalance, deposit} = require('./atm');
const { money } = require('./wallet');

function welcome(){

    console.clear();
    console.log("Welcome to the Senior Chief Banking System!");
    let pin = promptForPIN('Please enter your PIN to continue: ', validatePin);
    console.log("\nYour PIN has been accepted!\n\n");
    atmSelection();
}

function atmSelection(){
    console.log("Please select from the following options: \n<1> Check Account Balance \n<2> Withdrawal \n<3> Deposit  \n<4> Check Wallet ");
    let selection = promptFor("<5> Done  ", choiceValidation);
    switch (selection){
        case "1":
            console.clear();
            let balance = getBalance();
            console.log(`\nYour current balance is: \$${balance.toFixed(2)}\n`);
            setTimeout(function() {atmSelection()}, 2000);
            break;
        case "2":
            console.clear();
            let withdrawAmount = promptFor("Please enter the amount to withdraw (in multiples of $10): $", numberValidation);
            let getMoney = withdraw(parseInt(withdrawAmount));
            if(getMoney){
                console.log("Please remove your bills below\n");
            } else {
                console.log("Insufficient Funds\n");

            }
            setTimeout(function() {atmSelection()}, 2000);
            break;
        case "3":
            console.clear();
            let depositAmount = promptFor("Please enter the amount to deposit: $", numberValidation);
            let giveMoney = deposit(parseFloat(depositAmount));
            if(giveMoney){
                console.log("Your money has been deposited and funds are immediately available\n");
            } else {
                console.log("Your money has been deposited. Any amount over $500 will be available in 2 business days\n");

            }
            setTimeout(function() {atmSelection()}, 2000);
            break;
        case "4":
            console.clear();
            console.log(`You currently have $${money.toFixed(2)} in your wallet\n`)
            break;
        case "5":
            console.log("Thank you for using the Senior Chief Banking System! \nHave a great day!\n ")
            break;
        default:
            break;
    }
}

function promptFor(question, valid) {
    let isValid;
    do {
      var response = prompt(question);
      if (response !== null) {
        response.trim();
      }
      isValid = valid(response);
    } while (response === "" || isValid === false || response === null);
    return response;
  }

  function promptForPIN(question, valid) {
    let isValid;
    do {
      var response = prompt(question, {echo: "*"});
      if (response !== null) {
        response.trim();
      }
      isValid = valid(response);
    } while (response === "" || isValid === false || response === null);
  
    return response;
  }

  function choiceValidation(input){
      if(parseInt(input) > 0 && parseInt(input) <= 5){
        return true;
      } else {
          return false;
      }
  }

  function numberValidation(input){
      if(parseInt(input) !== NaN){
          return true;
      } else {
          return false;
      }
  }


  welcome();


