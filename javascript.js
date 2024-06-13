// Logic to get computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Logic to get human choice
function getHumanChoice() {
    let humanInput = prompt('Rock, Paper or Scissors?')
    switch (humanInput.toLowerCase()) {
        case 'rock':
            return 'Rock';
        break;

        case 'paper':
            return 'Paper';
        break;

        case 'scissors':
            return 'Scissors';
        break;

        default:
            alert('Error: Please input Rock, Paper or Scissors only');
            return getHumanChoice();
    }
}

let humanScore = 0
let computerScore = 0

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

// Logic to play 1 round
function playRound (humanChoice, computerChoice) {
    console.log("Computer selected: " + computerSelection);
    console.log("You selected: " + humanSelection);
    if (humanChoice == computerChoice) {
        return console.log("It's a tie!");
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper') {
        return console.log("You lose! Paper beats Rock."), computerScore += 1;
    } else if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
        return console.log("You win! Rock beats Scissors."), humanScore += 1;
    } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        return console.log("You win! Paper beats Rock."), humanScore += 1;
    } else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
        return console.log("You lose! Scissors beat Paper."), computerScore += 1;
    } else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
        return console.log("You lose! Rock beats Scissors."), computerScore += 1;
    } else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
        return console.log("You win! Scissors beat Paper."), humanScore += 1;
    } else {
        return console.log("Error");
    }
}

// Logic to play 5 rounds in a row
function playGame () {
    playRound(humanSelection, computerSelection);
    console.log("The score is:\nComputer: " + computerScore + "\nYou: " + humanScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("The score is:\nComputer: " + computerScore + "\nYou: " + humanScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("The score is:\nComputer: " + computerScore + "\nYou: " + humanScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("The score is:\nComputer: " + computerScore + "\nYou: " + humanScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("The score is:\nComputer: " + computerScore + "\nYou: " + humanScore);
    if (humanScore == computerScore) {
        return console.log("The game is a tie!");
    } else if (humanScore > computerScore) {
        return console.log("You win the game. Congratulations!")
    } else {
        return console.log("You lose the game. Better luck next time.")
    }
}

playGame()