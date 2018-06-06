//Variables

var wordChoices = ["hamilton", "toronto", "windsor", "kapuskasing", "penetanguishene", "ottawa", "sudbury","kingston"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // P _ _ _ _ 
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;





//functions
function startGame () {
    selectedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    lettersinWord = selectedWord.split ("");
    numBlanks = lettersinWord.length;

    //reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanks
    for (var i=0;i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    //change HTML to reflect game 
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    //console-log
    console.log (selectedWord);
    console.log (lettersinWord);
    console.log (numBlanks);
    console.log (blanksAndSuccesses);
    }

function checkLetters(letter) {
    var islettersinWord = false;
    for (var i=0;i<numBlanks;i++){
        if(selectedWord[i] == letter) {
            islettersinWord = true;
            alert("Bingo! You got a Letter!")
        }
    }

    if(islettersinWord) {
        for (var i=0;i<numBlanks;i++){
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
        }
    }
}

else {
     wrongLetters.push(letter);
     guessesLeft--
    }

console.log (blanksAndSuccesses);


}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

document.getElementById("numGuesses").innerHTML = numGuesses;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");


//won?
if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
    winCount++;
    alert("You are a Winner!");

    document.getElementById("winCounter").innerHTML = winCount;

    startGame ();

}

//lost?

else if (guessesLeft == 0) {
    lossCount++;
    alert("You are a Loser")

    document.getElementById("lossCounter").innerHTML = lossCount;

    startGame ();
    }
}

    //game
startGame();

    //register guesses/key presses
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters (letterGuessed);
    roundComplete();

    //console-log
    console.log(letterGuessed);
}