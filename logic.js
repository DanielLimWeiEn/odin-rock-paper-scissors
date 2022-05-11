/**
 * Global Variables.
 */
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
let scoreboard = {
    'player': 0,
    'computer': 0
};

/**
 * Update scoreboard method to update the global scoreboard.
 * 
 * @param {*} player Either 'player' or 'computer'
 * @param {*} score The new score.
 */
function updateScoreboard(player, score) {
    scoreboard[player] = score;
}

/**
 * Method to rest the scoreboard.
 */
function resetScoreboard() {
    scoreboard = {
        'player': 0,
        'computer': 0
    };
}

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
    let secondHalf;

    if (status === "Win") {
        secondHalf = `${playerSelection} beats ${computerSelection}`;
        updateScoreboard("player", scoreboard["player"] + 1);
    } else if (status === "Lose") {
        secondHalf = `${computerSelection} beats ${playerSelection}`;
        updateScoreboard("computer", scoreboard["computer"] + 1);
    } else {
        secondHalf = `You both selected the ${playerSelection}`;
    }
    return firstHalf + secondHalf;
}

/**
 * DOM Manipulation.
 */
const btnList = document.querySelectorAll("div button");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
let outcome;

btnList.forEach(btn => {
    const sign = btn.id;
    btn.addEventListener('click', event => {
        // Update the outcome for the round.
        outcome = document.createElement('h1');
        outcome.textContent = playRound(sign, computerPlay());
        result.replaceChildren(outcome);

        // Update the score board.
        let board = document.createElement('h1');
        board.textContent = `Player: ${scoreboard['player']} vs Computer: ${scoreboard['computer']}`;
        score.replaceChildren(board);

        // Check for winners and maintain state until reset.
        if (scoreboard['player'] >= 5 || scoreboard['computer'] >= 5) {
            outcome = document.createElement('h1');
            outcome.textContent = scoreboard['player'] >= 5
                ? "You Win!"
                : "You Lose!"
            result.replaceChildren(outcome);
            score.replaceChildren();
        }
    });
});