/*
-----Constants declaration-----
*/ 
const inputText = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const resultText = document.querySelector("#result");

/*-----Variables declarations----- */
let userInput;


/*-----onClick Actions-----*/

checkButton.onclick = checkPalindrome;


/*----Functions-----*/

function checkPalindrome(){
    userInput = document.getElementById("text-input");

    let arrAux = [];

    for(let i = 0; i<userInput.lenght; i++){
        arrAux.push(userInput.charAt(i));
    }
    
    let invertedArr = arrAux.reverse();

    arrAux.forEach((element) =>console.log(element));

    if(arrAux === invertedArr){
        resultText.innerText = "It's a palindrome!";

        console.log("true");
    }else{
        resultText.innerText ="It's not a palindrome.";
        console.log("false");
    }

}