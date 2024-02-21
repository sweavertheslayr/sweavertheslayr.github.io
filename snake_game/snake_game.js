
import { update as updateSnake, draw as drawSnake, dead as snakeDead, SNAKE_SPEED } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { draw as drawGrid, rows, columns } from "./grid.js";
import { init, getPressedButton } from "./input.js";
import { addScore } from "./score.js";

const root = document.documentElement;

const gameBoard = document.getElementById('game-board');
const grid = document.querySelector('.grid');
const gameText = document.querySelector('.game-text');


let lastRenderTime = 0;

// set grid size
root.style.setProperty('--rows', rows);
root.style.setProperty('--columns', columns);

drawGrid(grid);
init();
addScore(0);


// prevent from selecting things
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});


let run = false;

function main(currentTime) {
    const deltaTime = (currentTime - lastRenderTime) / 1000;

    window.requestAnimationFrame(main);

    if (deltaTime < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;

    if (getPressedButton()) {

        update();

        if (!run)  {
            gameText.classList.add('fade');
            gameText.addEventListener("animationend", () => {
                gameText.classList.add('hide');
            })
        }
    }
    
    if (snakeDead()) {
        location.reload();
        return;
    }

    draw();
}

function update() {
    updateSnake();
    updateFood();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

window.requestAnimationFrame(main);