// First question in javascript test
for (let i = 2; i <=12; i++){
    for (let j = 2; j <= 12; j++){
        console.log(i + " X " + j + " = " + i * j); 
    }

}

// Second question in javascript test
const amountToConvert = document.querySelector("input")

const currency = document.querySelector("select");

const displayResult = document.querySelector(".result");

const convertButton = document.querySelector(".convert-button");

const cancelButton = document.querySelector(".cancel-button")

convertButton.addEventListener("click", function () {
    let inputValue = amountToConvert.value;
    let choosenCurrency = currency.value;

    let result;

    if(choosenCurrency == "USD") {
        result = inputValue / 1400.50
   
    }else if(choosenCurrency =="EUR") {
        result = inputValue / 1746.31
    }

    console.log(result)

    displayResult.innerText = result;

    amountToConvert.value = "";
});

cancelButton.addEventListener("click", function() {
    amountToConvert.value = "";
    displayResult.innerText = "";

});

// third question answer
function printThomas(str) {
        if (str.toLowerCase() === "thomas") {
            console.log("Thomas");
        } else {
            console.log("Input string is not 'thomas'");
        }
    }

// 4th question answer

const reversedString = reverseString("answer");
console.log(reversedString);
     