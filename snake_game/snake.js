import { rows, columns } from "./grid.js";

export const SNAKE_SPEED = 5;

export const snakeBody = [{ x: 8, y: 8 }, { x: 8, y: 8 }, { x: 8, y: 8 }];

const inputBuffer = [];

let newInputDirection = { x: 0, y: 0 };

export function addInput(newInput) {
    inputBuffer.push(newInput);
}

function move(removeTail) {

    // if there is a new input
    if (inputBuffer.length !== 0) {
        // set input direction
        newInputDirection = inputBuffer[0];
        // remove direction from buffer
        inputBuffer.shift();
    }

    // set input direction
    const inputDirection = newInputDirection;
    
    // create new head
    let snakeHead = {
        x: snakeBody[0].x + inputDirection.x,
        y: snakeBody[0].y + inputDirection.y
    };
    // prepend new head to body
    snakeBody.unshift(snakeHead);
    // remove tail
    if (removeTail) snakeBody.pop();
}

export function grow() {
    move(false);
}

export function update() {
    move(true);
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}