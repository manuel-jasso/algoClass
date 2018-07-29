/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

function insertionSort (arr) {
    if (arr.length > 1)  {
        for (let wall = 2, len = arr.length; wall <= len; wall++) {
            for (let j = wall-1; j > 0 && arr[j-1] > arr[j]; j--) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]]; // swap
            }
        }
    }
    return arr;
}

console.log(
    insertionSort([1,3,2])
);
