// create random number function
let randomNumber;
function generateRandomNumber() {
    return Math.floor(Math.random() * (9)) + 1;
}
// create computerPlay() and make it return random selection of rock-paper-scissors
function computerPlay() {
    randomNumber = generateRandomNumber();
    if (randomNumber <= 3) {
        return "rock";
    }
    else if (randomNumber <= 6) {
        return "paper";
    }
    else {
        return "scissors"
    }
}


// create computerSelection variable
let computerSelection;
// create playerSelection variable
let playerSelection;
// create playerScore & computerScore
let playerScore;
let computerScore;
// create victory() and defeat() to keep loops cleaner
function victory() {
    console.log(`You picked: ${playerSelection}. Your opponent picked: ${computerSelection}. \nYou won this round!`);
    playerScore = ++playerScore;
}
function defeat() {
    console.log(`You picked: ${playerSelection}. Your opponent picked: ${computerSelection}. \nYou lost this round!`);
    computerScore = ++computerScore;
}
// create singleRound() which plays playSelection against computerSelection
function singleRound() {
    // ask rock-paper-scissors and store input in playerSelection (case-insensitive)
    playerSelection = prompt("Would you like to pick Rock, Paper or Scissors?").toLowerCase();
    // get new computerSelection
    computerSelection = computerPlay();
    // test for tie, loss, or win in all playerSelection scenarios
    if (playerSelection === computerSelection) {
        console.log("It was a tie, go again!")
            singleRound();
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            defeat();    
        }
        else {
            victory();
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            defeat();    
        }
        else {
            victory();
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            defeat();    
        }
        else {
            victory();
        }
    }
    else {
        console.log("Please enter either rock, paper or scissors!")
        singleRound();
    }
}

// creat playAgain to allow repeated games
let playAgain;
// create game()
function game() {
    //reset score and winner when game is replayed
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i <= 4; i++) {
        singleRound();
    }
    console.log(`You won ${playerScore} rounds. Your opponent won ${computerScore} rounds.`);
    if (playerScore > computerScore) {
        console.log("You won the game!");
    }
    else {
        console.log("You lost the game!")
    }
    function restart() {
        playAgain = prompt("Would you like to play again?").toLowerCase();
        if (playAgain === "yes") {
            console.log("----------------------------\nNew game!")
            game();
        }
        else if (playAgain === "no") {
            console.log("Have a good day!");
        }
        else {
            console.log("Please enter either yes or no!");
            restart();
        }
    }
    restart();
    
}
game();
    // create loop for 5 rounds of singleRound()
    