

let highScore = localStorage.getItem('highScore') || 0;

let currentScore = 0;

const highScoreDisplay = document.getElementById('high-score');
const currentScoreDisplay = document.getElementById('current-score');






export function addScore(points) {

    currentScore += points;
    currentScoreDisplay.innerHTML = currentScore.toString();

    updateHighScore();
}

function updateHighScore() {

// If the user has more points than the currently stored high score then
    if (currentScore > highScore) {
        // Set the high score to the users' current points
        highScore = parseInt(currentScore);
        // Store the high score
        localStorage.setItem('highScore', highScore);
        highScoreDisplay.innerHTML = highScore.toString();
    }
    else {
        highScoreDisplay.innerHTML = highScore.toString();
    }
}