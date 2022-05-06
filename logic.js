/**
 * Gets a random integer between min and max values.
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns 'Rock', 'Paper' or 'Scissors' randomly,
 * representing the computer making a move.
 */
function computerPlay() {
    let val = getRandomInteger(0, 3);
    if (val === 0) {
        return "Rock";
    } else if (val === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}