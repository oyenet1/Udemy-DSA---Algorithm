// An algorithm to search for number in array

/*
linear search examples
find()
indexOf()
includes()
findIndex()
*/


let methodOne = (arr, target) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (target == arr[i]) {
            return `The program runs ${count} times, and the number appeared at index ${i}`;
        }
    }
    return -1;
};

// this run O(n) times
let methodTwo = (arr, target) => {
    let count = 0;
    let left = 0;
    let right = arr.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (arr[middle] < target) {
            left = middle + 1;
        } else if (arr[middle] > target) {
            right = middle - 1;
        } else {
            return `The program runs ${count} times, and the number appeared at index ${middle}`;
        }
        count++;
    }
    return -1;
}

console.log(methodOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 17));
console.log(methodTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 23));