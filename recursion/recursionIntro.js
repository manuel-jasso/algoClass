//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function loop (n) {
    while (n >= 0) {
        console.log(`n=${n--}`);
    }
}
//loop(3);

//2. Next, try looping just like above except using recursion
function loopr (n) {
    if (n < 0) {
        return;
    }
    console.log(`n=${n}`);
    loopr(n-1);
}
//loopr(3);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function exponent (base, expo) {
    if (expo <= 0) {
        return 1;
    }
    let exp = base;
    while (--expo > 0) {
        exp = exp * base;
    }
    return exp;
}
// console.log(`exponent(2,0)=${exponent(2,0)}`);
// console.log(`exponent(2,1)=${exponent(2,1)}`);
// console.log(`exponent(2,2)=${exponent(2,2)}`);
// console.log(`exponent(2,3)=${exponent(2,3)}`);

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function recursiveExponent (base, expo) {
    if (expo <= 0) {
        return 1;
    }
    return base * recursiveExponent (base, expo-1);
}
// console.log(`recursiveExponent(2,0)=${recursiveExponent(2,0)}`);
// console.log(`recursiveExponent(2,1)=${recursiveExponent(2,1)}`);
// console.log(`recursiveExponent(2,2)=${recursiveExponent(2,2)}`);
// console.log(`recursiveExponent(2,3)=${recursiveExponent(2,3)}`);

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier (arr, num) {
    if (arr.length === 0)
        return arr;
    let elem = arr.pop();
    recursiveMultiplier(arr,num);
    arr.push(elem * num);
    return arr;
}
console.log(recursiveMultiplier([1,2,3],2));

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let last = arr[arr.length-1];
    let rest = recursiveReverse(arr.slice(0,arr.length-1));
    return [last].concat(rest);
}

// let arr = [1,2,3];
// console.log(arr);
// console.log(recursiveReverse(arr));
// recursiveReverse(arr);

/*
[] => []
[a] => [a]
[a,b] => [b,a]
[a,b,c] => [c,b,a]
[a,b,c,d] => [d,c,b,a]
*/