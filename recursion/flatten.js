/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten (arr) {
    if (!arr.length) {
        return arr;
    }
    let farr = [];
    for (let i = 0, l = arr.length; i < l; i++) {
        let elem = arr[i];
        if (elem.length) {
            let felem = flatten(elem);
            // console.log(`concat ${JSON.stringify(farr)} and ${JSON.stringify(felem)}`);
            farr = farr.concat(felem);
        } else {
            // console.log(`push ${elem} into ${JSON.stringify(farr)}`);
            farr.push(elem);
        }
        // console.log(farr);
    }
    return farr;
}

console.log(
    flatten(
        [ [1], [2,[3]] ]
    )
);

console.log(flatten([1,[2],[3, [[4]]]]));
