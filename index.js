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
let playerScore = 0;
let computerScore = 0;

// listen for button push inputs
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    singleRound('rock')
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    singleRound('scissors');
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    singleRound('paper');
});

// set writeable paragraphs
roundResultPara = document.querySelector('.roundResult');
playerScorePara = document.querySelector('.playerScore');
computerScorePara = document.querySelector('.computerScore');
// create victory() and defeat() to keep loops cleaner
function victory() {
    playerScore += 1;
    console.log(playerScore);
    return (`You picked: ${playerSelection}. Your opponent picked: ${computerSelection}. \nYou won this round!`);
}
function defeat() {
    computerScore += 1;
    return (`You picked: ${playerSelection}. Your opponent picked: ${computerSelection}. \nYou lost this round!`);
}

function endGame(winner) {
    alert(`${winner} won 5 rounds! ${winner} won the game!`);
    playerScore = 0;
    computerScore = 0;
    playerScorePara.textContent = 'Your score:'
    computerScorePara.textContent = 'Opponent score:'
    roundResultPara.textContent = 'No round started.'
}
// create singleRound() which plays playSelection against computerSelection
function singleRound(choice) {
    console.log(choice);
    // ask rock-paper-scissors and store input in playerSelection (case-insensitive)
    playerSelection = choice;
    // get new computerSelection
    computerSelection = computerPlay();
    // test for tie, loss, or win in all playerSelection scenarios
    if (playerSelection === computerSelection) {
        roundResultPara.textContent = "It was a tie, go again!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            roundResultPara.textContent = defeat();    
        }
        else {
            roundResultPara.textContent = victory();
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            roundResultPara.textContent = defeat();    
        }
        else {
            roundResultPara.textContent = victory();
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundResultPara.textContent = defeat();    
        }
        else {
            roundResultPara.textContent = victory();
        }
    }
    playerScorePara.textContent = `Your score: ${playerScore}`;
    computerScorePara.textContent = `Opponent score: ${computerScore}`;

    if (playerScore === 5) {
        endGame('You');
    }
    else if (computerScore === 5) {
        endGame('Your opponent');
    }
}

// creat playAgain to allow repeated games
//let playAgain;
//// create game()
//function game() {
////reset score and winner when game is replayed
//    playerScore = 0;
//    computerScore = 0;
//    for (let i = 0; i <= 4; i++) {
//        singleRound();
//    }
//    console.log(`You won ${playerScore} rounds. Your opponent won ${computerScore} rounds.`);
//    if (playerScore > computerScore) {
//        console.log("You won the game!");
//    }
//    else {
//        console.log("You lost the game!")
//    }
//    function restart() {
//        playAgain = prompt("Would you like to play again?").toLowerCase();
//        if (playAgain === "yes") {
//            console.log("----------------------------\nNew game!")
//            game();
//        }
//        else if (playAgain === "no") {
//            console.log("Have a good day!");
//        }
//        else {
//            console.log("Please enter either yes or no!");
//            restart();
//        }
//    }
//    restart();
//    
//}
//game();
//    // create loop for 5 rounds of singleRound()
//    