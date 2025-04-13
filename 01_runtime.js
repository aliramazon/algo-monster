/* 
1. What is the asymptotic time bound of functions with these time complexities?
3N + 2N + N => O(N)
2N^3 + 5N^2 => O(N^3)
N + log(N) => O(N)
N^2 log(N) => O(N^2 log(N))
2^N + N^2 => O(2^N)
10 => O(1)
*/

/* 2. What is the time complexity of this code? */
/*
    Time Complexity: N + N => O(N)
    Space Complexity: 1 for var N  + 1 for i + 1 for maxVal + N for array => O(N)
*/

var N = parseInt(gets());
const ar = new Array(N);
for (let i = 0; i < N; i++) {
    ar[i] = parseInt(gets());
}
let maxVal = ar[0];
for (let i = 1; i < N; i++) {
    maxVal = Math.max(maxVal, ar[i]);
}
console.log(maxVal);

/* 3. What is the time complexity of this code? */
/*
    Time Complexity: 
        - new Array(N): new Array(N) creates a sparse array and  no element initialization: O(1)
        - .fill(new Array(N)): Iterates the array and fills each slot with a reference: O(N)
        - nested loop: N^2
        - sorting: N * logN * N
        - Final: O(N^2 * log(N))
     Space Complexity:
        - Variable N: O(1)
        - Outer array of size N with shared inner array of size N:  O(N)
        - If the intention was to create a real 2D array (distinct rows), then: O(N^2)
        - Loop counters i and j: O(1)
        - Final Space: O(N) for this code, or O(N^2) if corrected to use unique rows
*/

var N = parseInt(gets());
const ar = new Array(N).fill(new Array(N));
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        ar[i][j] = parseInt(gets());
    }
}
for (let i = 0; i < N; i++) {
    ar[i].sort();
}

/* 4. What is the time complexity of this code?  */
/* 
    Assume an O(1) swap(a, b) function that swaps the values a and b
    Time Complexity: 
        - new Array(N): new Array(N) creates a sparse array and  no element initialization: O(1)
        - .fill(new Array(N)): Iterates the array and fills each slot with a reference: O(N)
        - nested loop: O(N^2)
        - final: O(N^2)
    Space Complexity:
        - Variable N: O(1);
        - Outer array of size N with shared inner array of size N:  O(N)
        - If the intention was to create a real 2D array (distinct rows), then: O(N^2)
        - Loop counters i and j: O(1)
        - Final Space: O(N) for this code, or O(N^2) if corrected to use unique rows

*/
var N = parseInt(gets());
const ar = new Array(N).fill(new Array(N));
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N / 2; j++) {
        swap(ar[i][j], ar[i][N - j]);
    }
}

/* 5. What is the time complexity of this code?  */
/* 
    Assume the log2(N) function takes O(1) time
    Assume string concatenation takes O(1) time
    Time Complexity:
        -  
        
    Space Complexity:


*/

function func(str, idx, len) {
    if (idx === len) {
        // ...  an O(1) op
    } else {
        func(str + "a", idx + 1, len);
        func(str + "b", idx + 1, len);
    }
}
var N = parseInt(gets());
func("", 0, parseInt(log2(N)));

/* 6. What is the time complexity of this code?  */
/* 

    Time Complexity:
        -  O(log(N))
        - O(log(N))
        
    Space Complexity:


*/
var N = parseInt(gets());
let bin = [];
while (N > 0) {
    bin.push(N);
    N /= 2;
}
