
// game variables
export let rows = 20;
export let columns = 21;

// style variables
let oddColor = getComputedStyle(document.documentElement)
.getPropertyValue('--odd-color');
let evenColor = getComputedStyle(document.documentElement)
.getPropertyValue('--even-color');

// add grid divs
let numberOfDivsToAdd = rows * columns;


export function draw(grid) {

    
    grid.querySelectorAll('div').forEach(div => div.remove());

    let colorCounter = 0;

    for (let i = 0; i < numberOfDivsToAdd; i++) {
        const newDiv = document.createElement('div');

        if (colorCounter % 2 === 0) {
            newDiv.style.backgroundColor = evenColor;
        }
        else {
            newDiv.style.backgroundColor = oddColor;
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