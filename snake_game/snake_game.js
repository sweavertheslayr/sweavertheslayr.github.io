
import { update as updateSnake, draw as drawSnake, dead as snakeDead, SNAKE_SPEED } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { draw as drawGrid, rows, columns } from "./grid.js";
import { init, getPressedButton } from "./input.js";

const root = document.documentElement;

const gameBoard = document.getElementById('game-board');
const grid = document.querySelector('.grid');

let lastRenderTime = 0;

// set grid size
root.style.setProperty('--rows', rows);
root.style.setProperty('--columns', columns);

drawGrid(grid);
init();

// prevent from selecting things
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

function main(currentTime) {
    const deltaTime = (currentTime - lastRenderTime) / 1000;

    window.requestAnimationFrame(main);

    if (deltaTime < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;

    if (getPressedButton()) {
        update();
    }
    

    draw();
}

function update() {
    updateSnake();
    updateFood();

    if (snakeDead()) location.reload();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

window.requestAnimationFrame(main);