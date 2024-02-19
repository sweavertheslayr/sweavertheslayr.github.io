import { rows, columns } from "./grid.js";
import { grow as snakeGrow, snakeBody } from "./snake.js"

let position = { x: 0, y: 0 };

function move() {
    let newPos;
    let occupied;
    let xPos;
    let yPos;

    do {
        xPos = Math.floor(Math.random() * rows);
        yPos = Math.floor(Math.random() * columns);

        newPos = { x: xPos, y: yPos };

        // Check if the new position is occupied by the snake
        occupied = snakeBody.some(segment => segment.x === newPos.x && segment.y === newPos.y);

    } while (occupied);

    position.x = xPos;
    position.y = yPos;
}

export function update() {

    // call collision checker
    checkEaten();
}

function checkEaten() {

    // if eaten
    if ((snakeBody[0].x === position.x) && (snakeBody[0].y === position.y)) {
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