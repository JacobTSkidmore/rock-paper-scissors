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


// create computerSelection variable and run computerPlay()
let computerSelection;
computerSelection = computerPlay();
// create playerSelection variable
let playerSelection;
// ask rock-paper-scissors and store input in playerSelection (case-insensitive)
playerSelection = prompt("Would you like to pick Rock, Paper or Scissors?");
// create singleRound() which plays playSelection against computerSelection
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    // equal ties
    // return not log result
// create game()
    // create loop for 5 rounds of singleRound()
    // create playerScore & computerScore, track singleRound(), log score variables
    // create isWinner whoever has greater score