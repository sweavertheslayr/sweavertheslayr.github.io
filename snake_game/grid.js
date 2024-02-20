
// game variables
export let rows = 15;
export let columns = 15;

// style variables
let oddColor = getComputedStyle(document.documentElement)
.getPropertyValue('--odd-color');
let evenColor = getComputedStyle(document.documentElement)
.getPropertyValue('--even-color');

// add grid divs
let numberOfDivsToAdd = rows * columns;

export function randomPosition() {
    
    return {
        x: Math.floor(Math.random() * rows) + 1,
        y: Math.floor(Math.random() * columns) + 1
    }
}

export function outsideGrid(position) {

    return ((position.x < 1) || (position.x > columns)) 
        || ((position.y < 1) || (position.y > rows));
}

export function draw(grid) {

    grid.querySelectorAll('div').forEach(div => div.remove());

    let colorCounter = 0;

    for (let i = 0; i < numberOfDivsToAdd; i++) {
        const newDiv = document.createElement('div');

        if (colorCounter % 2 === 0) {
            newDiv.style.backgroundColor = oddColor;
        }
        else {
            newDiv.style.backgroundColor = evenColor;
        }

        if (columns % 2 === 0) {
            if ((i + 1) % columns !== 0) {
                colorCounter++;
            }
        }
        else {
            colorCounter++;
        }
        
        grid.appendChild(newDiv);
    }

}