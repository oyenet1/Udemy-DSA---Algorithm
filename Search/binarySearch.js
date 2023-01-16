let binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (arr[middle] > val) {
            right = middle - 1;
        } else if (arr[middle] < val) {
            left = middle + 1;
        } else {
            return middle;
        };
    }
    return -1;
}
/*

*/

let numbers = [2, 5, 1, 4, 6, 8, 9, 7];
console.log(binarySearch(numbers, 6));