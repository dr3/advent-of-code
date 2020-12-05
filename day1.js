const inputs = require('fs').readFileSync('./day1.txt').toString().split('\n').map(Number);

const part1 = vals => {
    for (const x of vals) {
        for (const y of vals) {
           if(x !== y && x + y === 2020) {
              return x * y;
           }
        }   
    }
}

console.log('part1', part1(inputs))

const part2 = vals => {
    for (const x of vals) {
        for (const y of vals) {
           for (const z of vals) {
               if(x !== y && y !== z && z !== x && x + y + z === 2020) {
                  return x * y * z;
               }
            }  
        }   
    }
}

console.log('part2', part2(inputs));