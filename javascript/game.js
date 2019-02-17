//Variables

var wordChoices = ["hamilton", "toronto", "windsor", "kapuskasing", "penetanguishene", "ottawa", "sudbury","kingston"];
var chosenWord = "";
var lettersLeft = [];
var blankSpace = 0;
var rightWrongGuesses = []; // P _ _ _ _ 
var wrongLetters = [];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var winScore = 0;
var lossScore = 0;
var guessesLeft = 6;

//functions
function startGame () {
    chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    lettersLeft = chosenWord.split ("");
    blankSpace = lettersLeft.length;

    //reset
    guessesLeft = 6;
    wrongLetters = [];
    rightWrongGuesses = [];

    //populate blanks
    for (var i=0;i<blankSpace; i++){
        rightWrongGuesses.push("_");
    }

    //change HTML to reflect game 
    document.getElementById("wordToGuess").innerHTML = rightWrongGuesses.join(" ");
    document.getElementById("numberGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winScore;
    document.getElementById("lossCounter").innerHTML = lossScore;


    //console-log
    console.log (chosenWord);
    console.log (lettersLeft);
    console.log (blankSpace);
    console.log (rightWrongGuesses);
    }

    //letters guessed
    function checkLetters(letter) {
        var islettersLeft = false;
        for (var i=0;i<blankSpace;i++){
            if(chosenWord[i] == letter) {
                islettersLeft = true;
                alert("Bingo! You got a Letter!")
        }
    }

    if(islettersLeft) {
        for (var i=0;i<blankSpace;i++){
            if(chosenWord[i] == letter) {
                rightWrongGuesses[i] = letter;
        }
    }
}

else {
     wrongLetters.push(letter);
     guessesLeft--
    }

console.log (rightWrongGuesses);


}

function roundComplete() {
    console.log("Win Count: " + winScore + " | Loss Count: " + lossScore + " | Guesses Left: " + guessesLeft);

document.getElementById("numberGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = rightWrongGuesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


//won?
if (lettersLeft.toString() == rightWrongGuesses.toString()) {
    winScore++;
    alert("You are a Winner!");

    document.getElementById("winCounter").innerHTML = winScore;

    startGame ();

}

//lost?

else if (guessesLeft == 0) {
    lossScore++;
    alert("You are a Loser")

    document.getElementById("lossCounter").innerHTML = lossScore;

    startGame ();
    }
}

    //game
startGame();

    //register guesses/key presses
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    var keyPressed = event.keyCode;
    var keysUsed = [];

    //loop through all keys in keysUsed
    for (i=0;i<keysUsed.length; i++){
    //check -- has key been pressed?

    //check if keyPressed is in keysUsed

    if (keyPressed === keysUsed[i]){
        alert("You have guessed this letter before! Guess again!")
        return;
    }
    else {
            //add keyPressed to usedKeys
    keyPressed.push(keysUsed);
            

    }
    keyPressed.push(keysUsed);
    }
   
    roundComplete();
    //console.log(letterGuessed);

}