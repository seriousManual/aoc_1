const fs = require('fs');
const allCombinations = require('allcombinations');

const numbers = fs.readFileSync('./file.txt', 'utf-8').split('\n').map(Number);
for (const [a, b] of allCombinations(numbers)) {
    if (a + b == 2020) {
        console.log(`${a} * ${b} == ${a * b}`);
        break;
    }
}