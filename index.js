"use strict"
const prompt = require('prompt-sync')();
const {validatePin, withdraw, getBalance, deposit} = require('./atm');

function welcome(){
    console.log("Welcome to the Senior Chief Banking System!");
    let pin = promptFor('Please enter your PIN to continue: ', validatePin);
    console.log("")
}

function atmSelection(){
    let selection = promptFor("Please select from the following options: \n<1> Check Account Balance \n<2> Withdrawal \n<3> Deposit \n<4> Done", numberValidation);
    switch (selection){
        case "1":

            break;
        case "2":

            break;
        case "3":

            break;
        case "4":
        
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

  function numberValidation(input){
      if(parseInt(input) > 0 && parseInt(input) < 5){
        return true;
      } else {
          return false;
      }
  }

  welcome();
