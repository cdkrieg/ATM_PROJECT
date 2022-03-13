"use strict"

var person = [{"identity":123456,"money": 150},{"identity":234567, "money": 38}];

function getIndexOfPerson(input){
    for(let i = 0; i < person[i].identity; i++){
        if(input === person[i].identity){
            return i;
        }
    }
    if(input !== person[i].identity){
        return null;
    }
}
function getMoney(index){
    return person[index].money;
}

module.exports  = {person}
module.exports.getIndexOfPerson = getIndexOfPerson;
module.exports.getMoney = getMoney;

