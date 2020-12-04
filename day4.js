const inputs = require('fs').readFileSync('./day4.txt').toString().split('\n');

let currentKey = 0;
let set = []

const validation = {
    'byr': (v) => v && v.length === 4 && Number(v) >= 1920 && Number(v) <= 2002,
    'iyr': (v) => v && v.length === 4 && Number(v) >= 2010 && Number(v) <= 2020,
    'eyr': (v) => v && v.length === 4 && Number(v) >= 2020 && Number(v) <= 2030,
    'hgt': (v) => v && ((v.includes('in') && Number(v.replace('in', '')) >= 59 && Number(v.replace('in', '')) <= 76) || (v.includes('cm') && Number(v.replace('cm', '')) >= 150 && Number(v.replace('cm', '')) <= 193)),
    'hcl': (v) => v && /^#[0-9a-f]{6}$/i.test(v),
    'ecl': (v) => v && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(v),
    'pid': (v) => v && /^[0-9]{9}$/i.test(v),
    'cid': (v) => true,
}

for(let x = 0; x < inputs.length; x++){
    if(inputs[x].length === 0){
        currentKey++
    } else {
        const stuff = inputs[x].split(' ').reduce((acc, val) => {
            const [type, value] = val.split(":");
            acc[type] = value;
            return acc;
        }, {})

        set[currentKey] = set[currentKey] ? {
            ...set[currentKey],
            ...stuff
        } : stuff
    }
}

const part1 = set.filter(id => {
    const out = Object.keys(validation).filter(key => key === 'cid' ? true : Object.keys(id).includes(key))
    return out.length == Object.keys(validation).length
}).length

const part2 = set.filter(id => {
    const out = Object.keys(validation).filter(key => validation[key](id[key]))
    return out.length == Object.keys(validation).length
}).length

console.log('part1', part1)
console.log('part2', part2)