// An algorithm to search for how amny matching substring

let methodOne = (long, short) => {
    let count = 0;
    let appear = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            count++;
            if (long[i + j] !== short[j]) break;
            if (j == short.length - 1) appear++;
        }

    }
    return `The program runs ${count} times, and the substring appear ${appear} times`;
};

// this run O(n) times
let methodTwo = (long, short) => {
    let count = 0;
    let appear = 0;
    for (let i = 0; i < long.length; i++) {
        count++;
        if (long.substr(i, short.length) === short) {
            appear++;
        }
    }
    return `The program runs ${count} times, and the substring appear ${appear} times`;
}

console.log(methodOne("lorie loled", "lor"));
console.log(methodTwo("lorie loled", "lor"));