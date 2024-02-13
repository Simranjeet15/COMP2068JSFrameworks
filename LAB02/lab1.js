const prompt = require('prompt');

// Function to generate computer's selection
function generateComputerSelection() {
    const randomNumber = Math.random();
    if (randomNumber < 0.35) {
        return 'PAPER';
    } else if (randomNumber < 0.68) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// Function to determine the winner
function determineWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return 'User Wins';
    } else {
        return 'Computer Wins';
    }
}

// Prompting the user to choose ROCK, PAPER, or SCISSORS
prompt.start();
prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    const userSelection = result.userSelection.toUpperCase();
    const computerSelection = generateComputerSelection();
    
    // Displaying both selections
    console.log('User Selection:', userSelection);
    console.log('Computer Selection:', computerSelection);
    
    // Determining the winner and displaying the outcome
    const outcome = determineWinner(userSelection, computerSelection);
    console.log('Outcome:', outcome);
});

// Function to handle errors
function onErr(err) {
    console.log(err);
    return 1;
}
