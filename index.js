"use strict"
const prompt = require('prompt-sync')();
const {validatePin, withdraw, getBalance, deposit} = require('./atm');
const wallet = require('./wallet');
let index;

function welcome(){

    console.clear();
    console.log("Welcome to the Senior Chief Banking System!");
    let personAccount = promptForPerson("Please enter your card number: ", personValidation);
    index = wallet.getIndexOfPerson(parseInt(personAccount));
    if(index === null){
        console.clear();
        console.log("Invalid card number!\n");
        setTimeout(function() {atmSelection()}, 3000);
    }
    promptForPIN('Please enter your PIN to continue: ', validatePin, index);
    console.log("\nYour PIN has been accepted!\n\n");
    atmSelection(index);
}

// #region Selections

function atmSelection(index){
    console.log("Please select from the following options: \n<1> Check Account Balance \n<2> Withdrawal \n<3> Deposit  \n<4> Check Wallet \n<5> Done");
    let selection = promptFor(" ", choiceValidation);
    switch (selection){
        case "1":
            balanceSelection(index);
            break;
        case "2":
            withdrawSelection(index);
            break;
        case "3":
            depositSelection(index);
            break;
        case "4":
            checkWallet(index);
            break;
        case "5":
            console.log("Thank you for using the Senior Chief Banking System! \nHave a great day!\n ")
            break;
        default:
            break;
    }
}

function balanceSelection(index){
    console.clear();
    let balance = getBalance(index);
    console.log(`\nYour current balance is: \$${balance.toFixed(2)}\n`);
    setTimeout(function() {atmSelection(index)}, 2000);
}

function withdrawSelection(index){
    console.clear();
    let withdrawAmount = promptFor("Please enter the amount to withdraw (in multiples of $10): $", numberValidation);
    let getMoney = withdraw(parseInt(withdrawAmount), index);
    if(getMoney){
        console.log("Please remove your bills below\n");
    } else {
        console.log("Insufficient Funds\n");

    }
    setTimeout(function() {atmSelection(index)}, 2000);
}

function depositSelection(index){
    console.clear();
    let depositAmount = promptFor("Please enter the amount to deposit: $", numberValidation);
    let giveMoney = deposit(parseFloat(depositAmount), index);
    if(giveMoney){
        console.log("Your money has been deposited and funds are immediately available\n");
    } else {
        console.log("Your money has been deposited. Any amount over $500 will be available in 2 business days\n");

    }
    setTimeout(function() {atmSelection(index)}, 2000);
}

function checkWallet(index){
    console.clear();
    console.log(`You currently have $${wallet.getMoney(index).toFixed(2)} in your wallet\n`);
    setTimeout(function() {atmSelection(index)}, 2000);
}

// #endregion

// #region Prompts

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

function promptForPIN(question, valid, index) {
    let isValid;
    do {
        var response = prompt(question, {echo: "*"});
        if (response !== null) {
        response.trim();
        }
        isValid = valid(response, index);
    } while (response === "" || isValid === false || response === null);

    return response;
}

function promptForPerson(question, valid) {
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

// #endregion

// #region Validation

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

  function personValidation(input){
      for(let i = 0; i < wallet.person.length; i++)
      if(wallet.person[i].identity === (parseInt(input))){
        return true;
      } else {
          return false;
      }
  }

// #endregion

  welcome();

