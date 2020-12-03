const inputs = require('fs').readFileSync('./day3.txt').toString().split('\n');

const getTrees = (right, down) => {
    let treesEncountered = 0;
    let horizontalPosition = 0;

    for (let y = 0; y < inputs.length; y) {
        const x = (horizontalPosition * right);
        const mapWidth = inputs[y].length;
        const value = inputs[y][x % mapWidth];

        if (value === '#') treesEncountered++;

        y = y + down;
        horizontalPosition++;
    }

    return treesEncountered
}

console.log('part1', getTrees(3, 1))
console.log('part2', getTrees(1, 1) * getTrees(3, 1) * getTrees(5, 1) * getTrees(7, 1) * getTrees(1, 2));