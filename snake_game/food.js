import { randomPosition } from "./grid.js";
import { grow as snakeGrow, onSnake, addSegmentsAdd } from "./snake.js"
import { addScore } from "./score.js";

let position = { x: 2, y: 6 };

function move() {
    let occupied;

    do {

        // set to random position
        position = randomPosition();

        // Check if the new position is occupied by the snake
        occupied = onSnake(position, false);

    } while (occupied);

}

export function update() {

    // call collision checker
    checkEaten();
}

function checkEaten() {

    // if eaten
    if (onSnake(position, false)) {
        addSegmentsAdd(1);
        addScore(1);
        snakeGrow();
        move();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = position.y;
    foodElement.style.gridColumnStart = position.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

move();