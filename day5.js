const inputs = require("fs").readFileSync("./day5.txt").toString().split("\n");

const out = inputs.map((pass) => parseInt(pass.replace(/F/g, '0').replace(/B/g, '1').replace(/L/g, '0').replace(/R/g, '1'), 2));

console.log('part1', out.sort((a, b) => b - a)[0])

for(let i = 0; i < 128*8+8; i++){
    if(!out.includes(i) && out.includes(i+1) && out.includes(i-1)) console.log('part2', i)
}