const inputs = require('fs').readFileSync('./day2.txt').toString().split('\n');

const part1valid = inputs.filter(value => {
    const [numbers, dirtyLetter, password] = value.split(' ');
    const letter = dirtyLetter[0];
    const [firstNumberString, secondNumberString] = numbers.split('-');
    const passwordLetterCount = password.split(letter).length - 1;
    return passwordLetterCount >= Number(firstNumberString) && passwordLetterCount <= Number(secondNumberString);
}).length

console.log('part 1', part1valid)

const part2valid = inputs.filter(value => {
    const [numbers, dirtyLetter, password] = value.split(' ');
    const letter = dirtyLetter[0];
    const [firstNumberString, secondNumberString] = numbers.split('-');
    const firstIndex = Number(firstNumberString) - 1;
    const secondIndex = Number(secondNumberString) - 1;
    return (password[firstIndex] === letter || password[secondIndex] === letter) && password[firstIndex] !== password[secondIndex];
}).length

console.log('part 2', part2valid)

