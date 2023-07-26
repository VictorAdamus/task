
var addTwoNumbers = function(l1, l2) {
    const numb1 = +l1.reverse().join('');
    const numb2 = +l2.reverse().join('')
    return Array.from(String(numb1 + numb2)).reverse()
};

const r = [9,9,9,9,9,9,9]
const p = [9,9,9,9]

console.log(addTwoNumbers(r, p))