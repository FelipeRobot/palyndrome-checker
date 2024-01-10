/*
-----Constants declaration-----
*/ 
const inputText = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const resultText = document.querySelector("#result");

/*-----Variables declarations----- */
let userInput;


/*-----onClick Actions-----*/

checkButton.onClick() = checkPalindrome;


/*----Functions-----*/

function checkPalindrome(){
    userInput = document.getElementById("text-input");

    let arrAux = userInput.split("");
    
    let invertedArr = arrAux.reverse();

    if(arrAux === invertedArr){
        resultText.innerText = "It's a palindrome!";

        console.log("true");
    }else{
        resultText.innerText ="It's not a palindrome.";
        console.log("false");
    }

}