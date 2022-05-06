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

function playRound(playerSelection, computerSelection) {
    
    let status;
    
    if (playerSelection === "rock") {
        
    } else if (playerSelection === "paper") {

    } else {

    }
}