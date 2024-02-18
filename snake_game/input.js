let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

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

    upButton.addEventListener('click', up);
    leftButton.addEventListener('click', left);
    downButton.addEventListener('click', down);
    rightButton.addEventListener('click', right);
});

function up() {
    if (lastInputDirection.y !== 0) return;
    inputDirection = { x: 0, y: -1 };
}

function down() {
    if (lastInputDirection.y !== 0) return;
    inputDirection = { x: 0, y: 1 };
}

function left() {
    if (lastInputDirection.x !== 0) return;
    inputDirection = { x: -1, y: 0 };
}

function right() {
    if (lastInputDirection.x !== 0) return;
    inputDirection = { x: 1, y: 0 };
}

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}