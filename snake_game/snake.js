import { outsideGrid } from "./grid.js";

export const SNAKE_SPEED = 5;

export const snakeBody = [{ x: 8, y: 8 }, { x: 8, y: 9 }, { x: 8, y: 10 }];

const inputBuffer = [];

let newInputDirection = { x: 0, y: -1 };

let addSegments = 0;

export function addInput(newInput) {
    inputBuffer.push(newInput);
}

function move() {

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
    snakeBody.pop();
}

export function grow() {
    const lastSegment = snakeBody[snakeBody.length - 1];
    for (let i = 0; i < addSegments; i++) {
        snakeBody.push({ ...lastSegment });
    }
    addSegments = 0;
}

export function update() {
    move();
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

export function onSnake(position, ignoreHead) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) {
            return false;
        }
        return segment.x === position.x && segment.y === position.y;
    });
}

export function dead() {

    // check if hit self or if leave grid
    return outsideGrid(snakeBody[0]) || hitSelf();
}

function hitSelf() {
    return onSnake(snakeBody[0], true);
}

export function addSegmentsAdd(amount) {
    addSegments += amount;
}