/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

function fibonacci (n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    if (!fibonacci._memo)
        fibonacci._memo = [];

    if (!fibonacci._memo[n]) {
        console.log(`Computing fibonacci(${n})`);
        fibonacci._memo[n] = fibonacci(n-1) + fibonacci(n-2);
        // return fibonacci(n-1) + fibonacci(n-2);
    }

    return fibonacci._memo[n];
}

let a = [];
let d1 = Date.now();
let l = process.argv[2] || 35;
for (let i = 0; i <= l; i++) {
    a.push(fibonacci(i));
}
let d2 = Date.now();
console.log(a);
console.log(d2 - d1);
