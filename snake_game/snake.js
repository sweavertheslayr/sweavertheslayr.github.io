import { getInputDirection } from "./input.js";
import { rows, columns } from "./grid.js";

export const SNAKE_SPEED = 10;

const snakeBody = [{ x: 8, y: 8 }];

export function update() {
    const inputDirection = getInputDirection();

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i+1] = { ...snakeBody[i] };
    }


    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y % (rows);
        snakeElement.style.gridColumnStart = segment.x % (columns + 1);
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}