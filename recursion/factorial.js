/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

function factorial (n) {
    if (n <= 1) {
        return 1;
    }
    let f = n;
    while (n > 1) {
        f *= --n;
    }
    return f;
}

function factorialr (n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorialr(n-1);
}

let f = factorialr;
console.log(f(0));
console.log(f(1));
console.log(f(2));
console.log(f(3));
console.log(f(4));
console.log(f(5));

