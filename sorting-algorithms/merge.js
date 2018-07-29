/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

// protip: Split the array into halves and merge them recursively
// protip: return once we hit an array with a single item. That is a sorted array of size 1!
// protip: compare the arrays item by item and return the concatenated result

function mergeSort(arr) {
    function merge(arr1, arr2) {
      let i1 = 0, l1 = arr1.length;
      let i2 = 0, l2 = arr2.length;
      let marr = [];
      while (i1 < l1 || i2 < l2) {
        //console.log(`i1=${i1} l1=${l1} i2=${i2} l2=${l2}`);
        //console.log(`marr = [${marr}]`);
        if (i1 < l1 && i2 < l2) {
          if (arr1[i1] < arr2[i2]) {
            marr.push(arr1[i1++]);
          } else {
            marr.push(arr2[i2++]);
          }
        } else if (i1 < l1 && i2 === l2) {
          marr.push(arr1[i1++]);
        } else if (i1 === l1 && i2 < l2) {
          marr.push(arr2[i2++]);
        }
      }
      console.log(`marr = [${marr}]`);
      return marr;
    }

  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let mid = Math.ceil(len / 2);
  let arr1 = arr.slice(0,mid);
  let arr2 = arr.slice(mid);
  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  return merge(arr1,arr2);
}

console.log(
    mergeSort([11,9,12,7,6,10,4,1,8,5,3,2])
);
