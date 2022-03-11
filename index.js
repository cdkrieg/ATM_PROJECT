"use strict"
const prompt = require('prompt-sync')();
const {validatePin, withdraw, getBalance, deposit} = require('./atm');

function welcome(){
    console.clear();
    console.log("Welcome to the Senior Chief Banking System!");
    let pin = promptForPIN('Please enter your PIN to continue: ', validatePin);
    console.log("Your PIN has been accepted!");
    atmSelection();
}

function atmSelection(){
    let selection = promptFor("Please select from the following options: \n<1> Check Account Balance \n<2> Withdrawal \n<3> Deposit \n<4> Done\n", numberValidation);
    switch (selection){
        case "1":
            console.clear();
            let balance = getBalance();
            console.log(`\nYour current balance is: \$${balance.toFixed(2)}\n`);
            setTimeout(function() {atmSelection()}, 2000);
            break;
        case "2":

            break;
        case "3":

            break;
        case "4":
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
      var response = prompt(question, {echo: '*'});
      if (response !== null) {
        response.trim();
      }
      isValid = valid(response);
    } while (response === "" || isValid === false || response === null);
    return response;
  }

  function numberValidation(input){
      if(parseInt(input) > 0 && parseInt(input) < 5){
        return true;
      } else {
          return false;
      }
  }

  welcome();
