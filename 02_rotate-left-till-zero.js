/* Create a function that takes an integer array containing one 0 and rotates the array counterclockwise so that the 0 ends up at the front of the array. */

/* 
    Time Complexity:
        Each shift() is O(N) in JS, because all elements must be reindexed.
        In the worst case, zero is at the end and you may do up to n shifts
*/
const rotateLeftTillZeroV1 = (nums) => {
    while (nums[0] !== 0) {
        nums.push(nums.shift());
    }

    return nums;
};

/* Uses an extra array to achieve O(n) time complexity */

const rotateLeftTillZeroV2 = (nums) => {
    if (nums[0] === 0) return nums;
    let zeroDigitPos = 0;
    const originalPositions = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroDigitPos = i;
        }
        originalPositions[i] = nums[i];
    }

    for (let j = 0; j < nums.length; j++) {
        const offset = j - zeroDigitPos;
        const newPos = (offset + nums.length) % nums.length;
        nums[newPos] = originalPositions[j];
    }

    return nums;
};

console.log(rotateLeftTillZeroV1([0, 1, 2, 3]));
console.log(rotateLeftTillZeroV1([1, 0, 2, 3]));
console.log(rotateLeftTillZeroV1([1, 0, 2, 3, 4, 5, 6]));
console.log(rotateLeftTillZeroV1([1, 8, 2, 3, 4, 0, 7]));
console.log(rotateLeftTillZeroV1([1, 8, 2, 3, 0, 5, 6]));
console.log(rotateLeftTillZeroV1([1, 8, 2, 3, 4, 5, 0]));
