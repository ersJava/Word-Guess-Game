
// not sure how to get the game to actually start in the page :(
// not sure how to make spaces in the multiple word cartoons
var cartoonArr = [
"voltron", "thundercats", "transformers", 
"jem", "rainbow brite", "muppet babies",
"the real ghostbusters","my little pony",
"heman and shera","smurfs adventures",
"teenage mutant ninja turtles", "care bears"
];
var wrongGuess = [];
var maxGuess = 9;
var answerArr = [];
var userGuesses = [];
var randomWord;
var winCounter = 0;
var wins = 0;
var loss = 0;


// Write functions

function startGame() {
    randomWord = cartoonArr[Math.floor(Math.random() * cartoonArr.length)];
    for (var i = 0; i < randomWord.length; i++)
    {
        answerArr.push('_');
    }
    console.log("Hello world");

    document.getElementById('letter').innerHTML = answerArr.join(" ");

    wrongGuess = [];
    maxGuess = 9;

    document.getElementById("max-guess").innerHTML = maxGuess;
}

function winLose()
{
    if (winCounter === randomWord.length)
    {
        alert('You Win!')
    }
        else if(maxGuess === 0)
        {
            alert('Sorry out of guesses')
        }
    {
}

document.onkeyup = function(event)
{
    userGuesses = event.key;
    
    if(randomWord.indexOf(userGuesses) > -1)
    {
        for (var i = 0; i < randomWord.length; i++)
        {
            
            if (randomWord[i] === userGuesses)
            {
                answerArr[i] = userGuesses;
                winCounter++;
                winLose();
            }

        }
    }
    else 
    {
        wrongGuess.push(userGuesses);
        maxGuess --;
        winLose();
    }
}


// Calling functions

startGame();
}

function updateDisplay() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("current word").innerText = "";
    for (i = 0; i < cartoonArr.length; i++) {
    document.getElementById("current word").innerText += guessingWord[i];
    document.getElementById("guesses remaining").innerText = remainingGuesses;
        document.getElementById("guessed Letters").innerText = lettersGuessed;
        if(maxGuess <= 0) {
            hasFinished = true;
        }
    }
}