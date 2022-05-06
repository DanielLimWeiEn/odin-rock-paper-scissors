/**
 * Global Variables.
 */
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

/**
 * Gets a random integer between min (inclusive) and max (exclusive).
 * 
 * @param {*} min The min integer value.
 * @param {*} max The max integer value.
 * @returns Returns an integer s.t. min <= value < max.
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Standardizes player input to be of the form String,
 * i.e. First character is upper case, the rest are lower
 * case.
 * 
 * @param {*} playerInput The input.
 * @returns Returns the standardized input.
 */
function standardizeInput(playerInput) {
    let temp = playerInput.toLowerCase();
    return playerInput.length >= 1
        ? playerInput[0].toUpperCase() + temp.substring(1)
        : playerInput[0].toUpperCase();
}

/**
 * Returns 'Rock', 'Paper' or 'Scissors' randomly,
 * representing the computer making a move.
 * 
 * @returns Returns the computer's move, rock, paper or scissors.
 */
function computerPlay() {
    let val = getRandomInteger(0, 3);
    if (val === 0) {
        return ROCK;
    } else if (val === 1) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

/**
 * Function to take player selection and computer selection to
 * play a round.
 * 
 * @param {*} playerSelection The Player's Choice.
 * @param {*} computerSelection The Computer's Choice.
 * @returns A declaration of the winner of the round.
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = standardizeInput(playerSelection);
    let status;
    
    if (playerSelection === ROCK) {
        status = computerSelection === ROCK
            ? "Tied"
            : computerSelection === PAPER
            ? "Lose"
            : "Win";
    } else if (playerSelection === PAPER) {
        status = computerSelection === ROCK
            ? "Win"
            : computerSelection === PAPER
            ? "Tied"
            : "Lose";
    } else if (playerSelection === SCISSORS) {
        status = computerSelection === ROCK
            ? "Lose"
            : computerSelection === PAPER
            ? "Win"
            : "Tied";
    }

    let firstHalf = `You ${status}! `;
    let secondHalf = status === "Win"
        ? `${playerSelection} beats ${computerSelection}`
        : status === "Lose"
        ? `${computerSelection} beats ${playerSelection}`
        : `You both selected the ${playerSelection}`;

    return firstHalf + secondHalf;
}

/**
 * Simulates playing 5 rounds of the game.
 * 
 * @returns Returns a result depending on who won.
 */
function game() {
    score = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice: ");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        let status = result.split(" ")[1];
        score = status === "Lose"
            ? score - 1
            : status === "Win"
            ? score + 1
            : score;
    }

    return score < 0
        ? "You Lost!"
        : score > 0
        ? "You Win!"
        : "You Tied!";
}