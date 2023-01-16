let linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}


let numbers = [2, 5, 1, 4, 6, 8, 9, 7];
console.log(linearSearch(numbers, 94));