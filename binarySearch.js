let binarySearch = (arr, el) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] < el) {
            start = middle + 1;
        } else if (arr[middle] > el) {
            end = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
};

console.log(binarySearch([1, 3, 4, 5, 7, 10, 14, 17, 20], 5));