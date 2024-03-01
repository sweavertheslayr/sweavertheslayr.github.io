

export const bar_count = 100;
const bar_max = 100;
const bar_min = 5;
const bar_width = '1rem';

export class Bar {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
}

class Graph {
    static bars = [];
    constructor(bar_count) {
        for (let i = 0; i < bar_count; i++) {
            let bar = new Bar((Math.floor(Math.random() * (bar_max - bar_min + 1)) + bar_min),
                              bar_width,
                              getComputedStyle(document.documentElement).getPropertyValue('--color-bars'));
            Graph.bars.push(bar);
        }
    }

    updateHTML() {
        
        const graph = document.getElementById('graph');

        graph.innerHTML = '';

        for (let i = 0; i < bar_count; i++) {
            const div = document.createElement('div');
            div.classList.add("bar");
            div.style.height = Graph.bars[i].height + '%';
            div.style.width = Graph.bars[i].width;
            div.style.backgroundColor = Graph.bars[i].color;
            graph.appendChild(div);
        }
    }

    getBars() {
        return Graph.bars;
    }

    setBars(index, value) {
        Graph.bars[index] = value;
    }

    readBars() {
        for (let i = 0; i < bar_count; i++) {
            console.log(Graph.bars[i]);
        }
    }

}

export let graph = new Graph(bar_count);
graph.updateHTML();