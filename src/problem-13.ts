/**
 * Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.
 */

function getFirstElement<T extends number | string | boolean> (arr: T[]){
    if(arr.length > 0){
        return arr[0];
    }
    return undefined;
}

const myArr = [1, 2, 3, 4];
console.log(getFirstElement(myArr));