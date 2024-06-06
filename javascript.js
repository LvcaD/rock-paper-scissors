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
console.log(getComputerChoice())



function getHumanChoice() {
    let humanInput = prompt('Rock, Paper or Scissors?')
    switch (humanInput.toLowerCase()) {
        case 'rock':
            return 'Rock';
        break;

        case 'paper':
            return'Paper';
        break;

        case 'scissors':
            return'Scissors';
        break;

        default:
            alert('Error: Please input Rock, Paper or Scissors only');
            return getHumanChoice();
    }
}

console.log(getHumanChoice())