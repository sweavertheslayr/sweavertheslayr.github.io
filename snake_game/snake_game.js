
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";
import { draw as drawGrid, rows, columns } from "./grid.js";

const root = document.documentElement;

const gameBoard = document.getElementById('game-board');
let lastRenderTime = 0;

// set grid size
root.style.setProperty('--rows', rows);
root.style.setProperty('--columns', columns);


const grid = document.querySelector('.grid');
drawGrid(grid);


function main(currentTime) {
    const deltaTime = (currentTime - lastRenderTime) / 1000;

    window.requestAnimationFrame(main);

    if (deltaTime < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    console.log('Render');

    update();
    draw();
}

function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
}


window.requestAnimationFrame(main);