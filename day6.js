const inputs = require("fs").readFileSync("./day6.txt").toString().split("\n");

let currentKey = 0;
let set = [];
let people = [];

for (let x = 0; x < inputs.length; x++) {
  if (inputs[x].length === 0) {
    currentKey++;
  } else {
    const stuff = [...new Set(inputs[x].split(""))];
    people[currentKey] = people[currentKey] ? people[currentKey] + 1 : 1;
    set[currentKey] = set[currentKey] ? [...set[currentKey], ...stuff] : stuff;
  }
}

const part1 = set
  .map((val) => [...new Set(val)])
  .reduce((acc, val) => acc + val.length, 0);
  
const part2 = set
  .map((vals) => [
    ...vals
      .reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())
      .entries(),
  ])
  .map((entr, index) => entr.filter((x) => x[1] === people[index]).length)
  .reduce((acc, val) => acc + val, 0);

console.log("part1", part1);
console.log("part2", part2);
