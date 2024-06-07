function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return 'Rock'
    } else if (randomNumber === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

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

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return console.log("It's a tie!")
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper') {
        return console.log("You lose! Paper beats Rock.")
    } else if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
        return console.log("You win! Rock beats Scissors.")
    } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        return console.log("You win! Paper beats Rock.")
    } else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
        return console.log("You lose! Scissors beat Paper.")
    } else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
        return console.log("You lose! Rock beats Scissors.")
    } else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
        return console.log("You win! Scissors beat Paper.")
    } else {
        return console.log("Error")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Computer selected: " + computerSelection)
console.log("You selected: " + humanSelection)

playRound(humanSelection, computerSelection)