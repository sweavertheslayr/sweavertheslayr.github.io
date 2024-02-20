import { addInput } from "./snake.js"

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
export let pressedButton = false;

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            e.preventDefault();
            up();
            break;
        case 'ArrowDown':
            e.preventDefault();
            down();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            left();
            break;
        case 'ArrowRight':
            e.preventDefault();
            right();
            break;
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const upButton = document.querySelector('.button-up');
    const leftButton = document.querySelector('.button-left');
    const downButton = document.querySelector('.button-down');
    const rightButton = document.querySelector('.button-right');

    upButton.addEventListener('touchstart', up);
    leftButton.addEventListener('touchstart', left);
    downButton.addEventListener('touchstart', down);
    rightButton.addEventListener('touchstart', right);
});

function up() {
    if (lastInputDirection.y !== 0) return;
    inputDirection = { x: 0, y: -1 };
    processInput();
}   

function down() {
    if (lastInputDirection.y !== 0) return;
    inputDirection = { x: 0, y: 1 };
    processInput();
}

function left() {
    if (lastInputDirection.x !== 0) return;
    inputDirection = { x: -1, y: 0 };
    processInput();
}

function right() {
    if (lastInputDirection.x !== 0) return;
    inputDirection = { x: 1, y: 0 };
    processInput();
}

function processInput() {
    pressedButton = true;
    lastInputDirection = inputDirection;
    addInput(inputDirection);
}

export function getPressedButton() {
    return pressedButton;
}

export function init() {

}