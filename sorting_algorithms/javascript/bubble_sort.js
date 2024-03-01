import { frameRate } from "./algorithm_manager.js"
import { Bar, graph } from "./graph.js";

let colorSelected =  getComputedStyle(document.documentElement).getPropertyValue('--color-bars-selected');
let colorComparing =  getComputedStyle(document.documentElement).getPropertyValue('--color-bars-compare');
let colorRegular =  getComputedStyle(document.documentElement).getPropertyValue('--color-bars');

class BubbleSort {

    constructor() {
        this.id = null;
        clearInterval(this.id);
        this.array = JSON.parse(JSON.stringify(graph.getBars()));
        this.moves = [];

        this.frame = 0;
    }

    barSet(bar, height, width, color) {
        bar.height = height;
        bar.width = width;
        bar.color = color;
    }

    updateArray() {
        for (let i = 0; i < graph.getBars().length; i++) {
            this.barSet(
                this.array[i], 
                graph.getBars()[i].height,
                graph.getBars()[i].width,
                graph.getBars()[i].color);
        }
    }

    getMoves() {
        const n = this.array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                let areSwapping = false;
                if (this.array[j].height > this.array[j + 1].height) {
                    let buffer = this.array[j].height;
                    this.array[j].height = this.array[j + 1].height;
                    this.array[j + 1].height = buffer;
                    areSwapping = true;
                }
                this.moves.push({ move: i + j, selected: j, comparing: j + 1, swapping: areSwapping});
            }
        }
    }

    start() {
        this.getMoves()
        this.id = setInterval(() => this.updateFrame(), frameRate);
    }

    pause() {
        clearInterval(this.id);
    }

    resume() {
        this.id = setInterval(() => this.updateFrame(), frameRate);
    }

    resetColor() {
        for (let i = 0; i < this.array.length; i++) {
            graph.getBars()[i].color = colorRegular;
        }
    }

    updateFrame() {

        this.resetColor();

        if (this.moves.length == 0) {
            this.pause();
            graph.updateHTML();
            return;
        }

        let currentMove = this.moves.shift();

        this.select(currentMove.selected);
        this.compare(currentMove.comparing);

        if (currentMove.swapping) {
            this.swap(currentMove.selected, currentMove.comparing);
        }

        graph.updateHTML();
    }

    swap(selected, comparing) {
        let buffer = graph.getBars()[selected].height;
        graph.getBars()[selected].height = graph.getBars()[comparing].height;
        graph.getBars()[comparing].height = buffer;
    }

    select(index) {
        graph.getBars()[index].color = colorSelected;
    }

    unselect(index) {
        graph.getBars()[index].color = colorRegular;
    }

    compare(index) {
        graph.getBars()[index].color = colorComparing;
    }

    uncompare(index) {
        graph.getBars()[index].color = colorRegular;
    }
}

export const bubbleSort = new BubbleSort();
bubbleSort.start();