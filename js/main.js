//Form
var elForm = document.querySelector('.money__form')
var elUserInput = document.querySelector('.money__input')
var elUserSelectFrom = document.querySelector('.money__select__from');
var elUserSelectTO = document.querySelector('.money__select__to');
var elResultBox = document.querySelector('.result-box');
var elResultInput = document.querySelector('.resalt-box__input');

//currensy
var USD_To_UZS = 10668.09;
var EUR_To_UZS = 12623.55;
var RUB_To_UZS = 146.04;


elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var userInput = Number(elUserInput.value.trim());
    var userSelectFrom = elUserSelectFrom.value;
    var userSelectTo = elUserSelectTO.value;

    //From
    if (userSelectFrom === 'usd') {
        userInput = (userInput * USD_To_UZS).toFixed(2);
    } else if (userSelectFrom === 'euro') {
        userInput = (userInput * EUR_To_UZS).toFixed(2);
    } else if (userSelectFrom === 'ruble') {
        userInput = (userInput * RUB_To_UZS).toFixed(2);
    } else if (userSelectFrom === 'so\'m') {
        userInput;
    }
    
   // To
    if (userSelectTo == 'usd') {
        if (userInput >= USD_To_UZS) {
            userInput = (userInput / USD_To_UZS).toFixed(2) + ' USD';
        } else {
            userInput = (userInput / USD_To_UZS).toFixed(2) + ' SENT';
        }     
    }else if (userSelectTo == 'euro') {
        if (userInput >= EUR_To_UZS) {
            userInput = (userInput / EUR_To_UZS).toFixed(2) + ' EUR';
        } else {
            userInput = (userInput / EUR_To_UZS).toFixed(2) + ' SENT';
        }
    } else if (userSelectTo == 'ruble') {
        if (userInput >= RUB_To_UZS) {
            userInput = (userInput / RUB_To_UZS).toFixed(2) + ' RUB';
        } else {
            userInput = (userInput / RUB_To_UZS).toFixed(2) + ' KAPEKA';
        }
    }else if (userSelectTo == 'so\'m') {
        userInput = userInput + ' UZS';
    }


    elResultInput.value = userInput;
});